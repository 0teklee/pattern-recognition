import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 79. Word Search",
  "description": "LeetCode problem 79",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "backtracking"],
  "tags": {
    "pattern": "backtracking",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "dfs---leetcode-79-word-search",
    "text": "DFS - LeetCode 79. Word Search"
  }, {
    "depth": 1,
    "slug": "문제-포인트",
    "text": "문제 포인트"
  }, {
    "depth": 2,
    "slug": "정답",
    "text": "정답"
  }, {
    "depth": 2,
    "slug": "오답-사고-과정",
    "text": "오답 사고 과정"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "dfs---leetcode-79-word-search",
      children: "DFS - LeetCode 79. Word Search"
    }), "\n", createVNode(_components.h1, {
      id: "문제-포인트",
      children: "문제 포인트"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["탐색 결과가 ", createVNode(_components.strong, {
          children: "방문 순서에 영향을 받음"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "백트래킹"
        }), "이 필요함\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.code, {
              children: "count[i]"
            }), "랑 현재 탐색 노드(", createVNode(_components.code, {
              children: "board[r][c]"
            }), ")가 일치하지 않을 때 탐색 중단"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "방문 업데이트 시점의 중요성 (경로 탐색의 경우, 인접 노드 모두 방문한 이후)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://blog.leetekwoo.com/blog/63#3-3-backtracking",
        children: "이전 글"
      }), "에서 살핀 백트레킹을 활용하는 문제이다. visited를 인접 행렬로 관리한다."]
    }), "\n", createVNode(_components.h2, {
      id: "정답",
      children: "정답"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dracula-soft",
      style: {
        backgroundColor: "#282A36",
        color: "#f6f6f4",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "/**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@description"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " 문제 : 인접 행렬에서 word를 만들 수 있는 여부 true/false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " *   방향은 상관없다. (왼<->오, 위 <->아래)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {character[][]}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " board"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {string}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " word"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@return"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {boolean}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " */"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " exist"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "board"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "word"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " board.length;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " cSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " board["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "].length;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " visited "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " Array."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "({ length"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize }, () "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(cSize)."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "fill"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " offset "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "  ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  function"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "c"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (word.length "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " count) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 기저 조건. 재귀 함수 전체 중단 조건"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    /** "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@note"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " 여기서 방문 처리 X **/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // visited[r][c] = true; //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "      // 조건 해당 시"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " &&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " &&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " cSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      !"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "visited[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " word[count]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "      /** "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@note"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " 방문 처리를 여기서 해야함. **/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      visited[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 방문 처리를 여기서 해야함"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      for"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [or, oc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "of"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " offset) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " or, c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " oc, count "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ")) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "      /** "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@note"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " 백트레킹 : 경로마다 다른 결과가 나올 수 있어 해주어야함. **/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      visited[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  for"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize; r"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " cSize; c"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "++"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(r, c, "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ")) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " false"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "오답-사고-과정",
      children: "오답 사고 과정"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dracula-soft",
      style: {
        backgroundColor: "#282A36",
        color: "#f6f6f4",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " exist"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "board"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "word"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " n "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " board.length;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " visited "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " Array."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "({ length"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " n }, () "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(n)."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "fill"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " offset "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "  ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  function"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "r"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "c"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "], "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "word"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "visited"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (visited[r][c]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " count;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    visited[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (word[count] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " board[r][c]) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "      // count를 어떻게 처리해야 될 지 몰랐다."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "      // 인접노드 방문 현재 글자가 word[count]랑 같을 때만 재귀 호출"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      for"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [or, oc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "of"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " offset) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [nr, nc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " or, c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " oc];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          nr "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " n "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          nc "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " n "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          nr "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " &&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          nc "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " &&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "          !"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "visited[nr][nc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          board[nr][nc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " word[count "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "        ) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          count "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+="
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "([nr, nc], word, visited, count "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    } "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " count;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // 문제 조건이 O(n^2)으로 2중 포문으로 푸는 것이 더 적절했음"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // count가 조건에 맞으면 바로 리턴만 하면됨. 누적할 필요는 없었음."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " result "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "], word, visited, "
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " result "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " word.length;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "};"
          })
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "site/content/algorithms/leetcode/79-word-search.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/79-word-search.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/79-word-search.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
