import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 4. Median of Two Sorted Arrays",
  "description": "LeetCode problem 4",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "binary-search"],
  "tags": {
    "pattern": "binary-search",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "leetcode-4-median-of-two-sorted-array",
    "text": "LeetCode 4. Median of Two Sorted Array"
  }, {
    "depth": 1,
    "slug": "topics",
    "text": "Topics"
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
    "slug": "사고-과정",
    "text": "사고 과정"
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
      id: "leetcode-4-median-of-two-sorted-array",
      children: "LeetCode 4. Median of Two Sorted Array"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        children: "문제 링크"
      })
    }), "\n", createVNode(_components.h1, {
      id: "topics",
      children: "Topics"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Array"
      }), "\n", createVNode(_components.li, {
        children: "Binary Search"
      }), "\n", createVNode(_components.li, {
        children: "Divide and Conquer"
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "문제-포인트",
      children: "문제 포인트"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "연결 리스트의 현재, 다음 포인터 연결"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "반복문"
        }), "에서 다음 포인터 연결 로직"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "count[i]"
        }), "랑 현재 탐색 노드(", createVNode(_components.code, {
          children: "board[r][c]"
        }), ")가 일치하지 않을 때 탐색 중단"]
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "방문 업데이트 시점의 중요성 (경로 탐색의 경우, 인접 노드 모두 방문한 이후)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "사실 이진 탐색으로 풀어야하는 문제인데,"
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
            children: "@param"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {number[]}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " nums1"
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
            children: " {number[]}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " nums2"
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
            children: " {number}"
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
            children: " findMedianSortedArrays"
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
            children: "nums1"
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
            children: "nums2"
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " merged "
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
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "nums1, "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "nums2]."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "sort"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: "a"
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
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " b);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " merged.length,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    isEven "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " size "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ==="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " pointer "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " isEven "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "floor"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(size "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "floor"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(size "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (isEven) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (merged[pointer] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " merged[pointer "
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
            children: "]) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 2"
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
              color: "#F6F6F4"
            },
            children: "  } "
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
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " merged[pointer];"
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
      id: "사고-과정",
      children: "사고 과정"
    }), "\n", createVNode(_components.p, {
      children: "처음에 set으로 시도하려 했으나, 테스트 케이스 44번에 중복 숫자 허용이 껴있어서 수정함."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Median 정의\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "숫자 총합의 중간 값인지, 말 그대로 배열의 가장 중앙을 뜻하는 지 확인. 후자."
          }), "\n", createVNode(_components.li, {
            children: "병합된 두 배열의 길이가 홀수 일 때는 Math.floor(length / 2)의 인덱스 값"
          }), "\n", createVNode(_components.li, {
            children: "짝수일 때는 Math.floor(length / 2)와 +1의 요소를 더한 뒤 / 2"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "두 배열을 합한 뒤 sort = merged - 중간 값의 탐색 대상"
      }), "\n", createVNode(_components.li, {
        children: "1번에서 중간 값이 배열 길이에 따라 달라짐을 확인함. 그대로 반환값 계산함"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "중복 요소 허용, 비허용에 대한 힌트가 없어 테스트 케이스에서 찾아냄."
      }), "\n"]
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

const url = "site/content/algorithms/leetcode/4-median-of-two-sorted-array.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/4-median-of-two-sorted-array.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/4-median-of-two-sorted-array.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
