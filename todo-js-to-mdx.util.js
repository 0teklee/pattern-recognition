import { format } from "date-fns";
import fs from "fs";
import { globby } from "globby";
import path from "path";

//  TODO 빌드 스크립트에 수정하여 추가
const GITHUB_BASE_URL =
  "https://github.com/0teklee/pattern-recognition/tree/main/site/content";

// 🛠️ snake_case → Title Case 변환
const toTitleCase = (str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// 🛠️ 알고리즘 패턴 관련 폴더 목록
const ALGORITHM_PATTERNS = new Set([
  "backtracking",
  "graph",
  "hash",
  "heap",
  "link-list",
  "set",
  "simulation",
  "tree",
]);

/**
 * 🛠️ JS 파일 내용을 MDX 형식으로 변환
 */
const convertJsToMdx = async (inputDir) => {
  const files = await globby(`${inputDir}/**/*.js`);

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const parsedPath = path.parse(file);

    // 📝 파일명 (snake-case → Title Case)
    const fileName = parsedPath.name.replace(/_/g, "-");
    const title = toTitleCase(fileName);

    // 📂 카테고리 및 태그 (폴더 이름 기반)
    const paths = parsedPath.dir.split(path.sep);
    const category = paths.pop();

    // 🏷️ pattern 설정 (알고리즘 패턴이 아니면 자기 폴더 이름)
    const pattern = ALGORITHM_PATTERNS.has(category) ? category : "";

    // 🏷️ tags 설정
    const tags = {
      category,
      pattern,
    };

    // 🕒 날짜 생성
    const createdAt = format(new Date(), "yyyy-MM-dd");

    console.log("parsedPath", parsedPath);

    // 📂 path 배열 (폴더 구조 반영)
    const pathSegments = parsedPath.dir
      .replace(inputDir, "")
      .split(path.sep)
      .filter((segment) => segment !== "");

    console.log("pathSegments", pathSegments);

    // 🔗 GitHub 링크 생성
    const githubLink = `${GITHUB_BASE_URL}/${pathSegments.join("/")}/${
      parsedPath.base
    }`;

    // 📝 description 설정 (첫 주석 또는 파일명)
    let description = title;
    const commentRegex = /\/\/\s*(.+)|\/\*([\s\S]*?)\*\//;
    const match = content.match(commentRegex);
    if (match) {
      description = match[1] ? match[1].trim() : match[2].trim();
    }

    // 🏷️ programmers 문제 링크 포함 여부 확인
    if (fileName.startsWith("prg") || content.includes("programmers")) {
      tags.platform = "programmers";
    }

    // MDX 변환 (주석 포함)
    const mdxContent = `---
title: "${title}"
description: "${description}"
createdAt: "${createdAt}"
path: ["algorithms", ${pathSegments.map((p) => `"${p}"`).join(", ")}]
tags:
  pattern: "${tags.pattern}"
  category: "${tags.category}"
  ${tags.platform ? `platform: "${tags.platform}"` : ""}
---

> 📌 **Source Code:** [${githubLink}](${githubLink})

\`\`\`js
${content.trim()}
\`\`\`
`;

    // 📂 MDX 파일로 저장
    const mdxFilePath = path.join(parsedPath.dir, `${parsedPath.name}.mdx`);
    fs.writeFileSync(mdxFilePath, mdxContent, "utf-8");
    console.log(`✅ Converted: ${mdxFilePath}`);
  }
};

// 실행
const inputDirectory = "./site/content/algorithms"; // 변경 가능
convertJsToMdx(inputDirectory).catch(console.error);
