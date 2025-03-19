import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 94. Binary Tree Inorder Traversal",
  "description": "LeetCode problem 94",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "tree", "traversal"],
  "tags": {
    "pattern": "tree-traversal",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "leetcode-94-binary-tree-inorder-traverse",
    "text": "LeetCode 94. Binary Tree Inorder Traverse"
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
    "slug": "오답-사고-과정",
    "text": "오답 사고 과정"
  }, {
    "depth": 3,
    "slug": "접근-문제점",
    "text": "접근 문제점"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      id: "leetcode-94-binary-tree-inorder-traverse",
      children: "LeetCode 94. Binary Tree Inorder Traverse"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        children: "문제 링크"
      })
    }), "\n", createVNode(_components.h1, {
      id: "topics",
      children: "Topics"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Stack"
      }), "\n", createVNode(_components.li, {
        children: "Tree"
      }), "\n", createVNode(_components.li, {
        children: "Depth-First Search"
      }), "\n", createVNode(_components.li, {
        children: "Binary Tree"
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
            children: " {string}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " s"
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
            children: " {string}"
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
            children: " longestPalindrome"
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
            children: "s"
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
            children: "  if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (s.length "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
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
            children: "return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 한 글자면 그대로 반환"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " start "
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
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    maxLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ";"
          })]
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
            children: " expandAroundCenter"
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
            children: "left"
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
            children: "right"
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
            children: "    while"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (left "
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
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " right "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s.length "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s[left] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s[right]) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      left"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "--"
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
            children: "      right"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "++"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [left "
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
            children: ", right "
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
              color: "#F6F6F4"
            },
            children: "]; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 팰린드롬의 시작과 끝 인덱스 반환"
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
            children: " i "
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
            children: "; i "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s.length; i"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 홀수 길이 팰린드롬"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [l1, r1] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " expandAroundCenter"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(i, i);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 짝수 길이 팰린드롬"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [l2, r2] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " expandAroundCenter"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(i, i "
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
          class: "line"
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
            children: " (r1 "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l1 "
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
              color: "#F286C4"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " maxLength) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l1;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      maxLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " r1 "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l1 "
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (r2 "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l2 "
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
              color: "#F286C4"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " maxLength) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l2;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      maxLength "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " r2 "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " l2 "
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
              color: "#F6F6F4"
            },
            children: " s."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "slice"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(start, start "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " maxLength);"
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
    }), "\n", createVNode(_components.h3, {
      id: "접근-문제점",
      children: "접근 문제점"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "visited가 불필요한데 사용했음"
      }), "\n", createVNode(_components.li, {
        children: "param으로 들어오는 root의 값처리를 제대로 못함"
      }), "\n"]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * Definition for a binary tree node."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * function TreeNode(val, left, right) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " *     this.val = (val===undefined ? 0 : val)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " *     this.left = (left===undefined ? null : left)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " *     this.right = (right===undefined ? null : right)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " * }"
          })
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
            children: " {TreeNode}"
          }), createVNode(_components.span, {
            style: {
              color: "#FFB86C",
              fontStyle: "italic"
            },
            children: " root"
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
            children: " {number[]}"
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
            children: " inorderTraversal"
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
            children: "root"
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
            children: " output "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " [];"
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
            children: " visited "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4",
              fontWeight: "bold"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: " Set"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "();"
          })]
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
            children: "root"
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
            children: "cur"
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
            children: " (visited."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "has"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(cur) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " !"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "root?.val) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
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
            children: "    visited."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(cur);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    output."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "push"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(root.val);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 인접 노드 방문 중위 순회는 왼 -> 루트 -> 오"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "    dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(root, root?.left);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "    dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(root, root?.right);"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "  dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(root, root?.val);"
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
            children: " output;"
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

const url = "site/content/algorithms/leetcode/94-binary-tree-inorder-traverse.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/94-binary-tree-inorder-traverse.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/94-binary-tree-inorder-traverse.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
