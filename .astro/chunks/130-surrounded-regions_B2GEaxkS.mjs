import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 130. Surrounded Regions",
  "description": "LeetCode problem 130",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "leetcode-130-surrounded-regions"],
  "tags": {
    "pattern": "DFS",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "leetcode-130-surrounded-regions",
    "text": "LeetCode 130. Surrounded Regions"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "leetcode-130-surrounded-regions",
      children: "LeetCode 130. Surrounded Regions"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://leetcode.com/problems/surrounded-regions",
        children: "문제 링크"
      })
    }), "\n", createVNode(_components.h1, {
      id: "topics",
      children: "Topics"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Array"
      }), "\n", createVNode(_components.li, {
        children: "Depth-First Search"
      }), "\n", createVNode(_components.li, {
        children: "Breadth-First Search"
      }), "\n", createVNode(_components.li, {
        children: "Union Find"
      }), "\n", createVNode(_components.li, {
        children: "Matrix"
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "문제-포인트",
      children: "문제 포인트"
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
            children: "@return"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {void}"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " Do not return anything, modify board in-place instead."
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
            children: " solve"
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
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "board.length "
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
            children: "board["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "].length) "
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
            children: " board.length,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    cSize "
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " directions "
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // 가장자리에 연결된 'O'를 찾고 'S'로 변경 (보존 처리)"
          })
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
            children: " (r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " cSize "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "!=="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "O"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
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
            children: "      return"
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
              color: "#F6F6F4"
            },
            children: "    board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "S"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 가장자리에 연결된 'O'는 보존"
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
            children: " [dr, dc] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "of"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " directions) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "      dfs"
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
            children: " dr, c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " dc);"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // 1. 가장자리에서 DFS 탐색하여 'O' → 'S' 변경 (보존)"
          })
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
              color: "#62E884"
            },
            children: "    dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(r, "
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
              color: "#62E884"
            },
            children: "    dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(r, cSize "
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
            children: ");"
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
              color: "#62E884"
            },
            children: "    dfs"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ", c);"
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
            children: "(rSize "
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
            children: ", c);"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // 2. 보드를 업데이트"
          })
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
            children: " (board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "O"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
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
              color: "#F6F6F4"
            },
            children: "        board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "X"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 감싸진 'O' → 'X'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      } "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "S"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
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
              color: "#F6F6F4"
            },
            children: "        board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "O"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "; "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 보존된 'S' → 원래대로 'O'"
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
        children: "DFS 방문 로직 오류 (dfs 내부 조건 오류)"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "if (visited[r][c]) return false → 이미 방문한 곳을 다시 방문하지 않도록 하는 것은 맞지만, dfs가 참/거짓을 반환해야 하는 이유가 불분명함."
      }), "\n", createVNode(_components.li, {
        children: "isChange = dfs([nr, nc]) 부분에서 true를 반환하면 board[r][c] = “X”로 변경하는데, 모든 경로를 탐색한 후 변환 여부를 결정해야 함."
      }), "\n", createVNode(_components.li, {
        children: "즉, 인접한 모든 ‘O’를 방문한 후 변경 여부를 판단해야 함."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "경계 조건 처리 오류 (isCurrentEdge 활용 문제)"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "isCurrentEdge가 true면 즉시 false를 반환하는 것은 틀림."
      }), "\n", createVNode(_components.li, {
        children: "가장자리에 있는 ‘O’를 발견하면 해당 영역 전체를 보존해야 함."
      }), "\n", createVNode(_components.li, {
        children: "false를 반환해도 인접 노드가 영향을 받지 않음 → 가장자리에 연결된 모든 ‘O’를 변경하지 않도록 표기하는 것이 핵심."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "보드 업데이트 타이밍 문제 (board[r][c] = “X”)"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "DFS 도중 바로 “X”로 변환하면 안 됨."
      }), "\n", createVNode(_components.li, {
        children: "탐색 중인 ‘O’가 실제로 감싸져 있는지 확정되지 않은 상태에서 변경되면 오답 가능성 증가."
      }), "\n", createVNode(_components.li, {
        children: "모든 DFS가 완료된 후, 감싸진 ‘O’를 ‘X’로 변환해야 함."
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
            children: "@return"
          }), createVNode(_components.span, {
            style: {
              color: "#97E1F1",
              fontStyle: "italic"
            },
            children: " {void}"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " Do not return anything, modify board in-place instead."
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
            children: " solve"
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
            children: " board.length,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    cSize "
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
            children: "  let"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "  // dfs t/f 반환. t면 X로 바꾼다, f면 바꾸지 않는다."
          })
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
            children: "]) {"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " isCurrentEdge "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
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
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " r "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " rSize "
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
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " cSize "
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
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 인접이 X인 경우, 연결된 모든 O가 X라면 바꿔야함"
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
            children: " (board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "X"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
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
              color: "#7B7F8B"
            },
            children: "    // 또는 O가 가장 자리에 있다면 X로 바꿀 수 없음"
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
            children: " (board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "O"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " isCurrentEdge) "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "return"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 현재 노드 = \"O\" 인접 노드에 따라 자기 자신이 바뀜"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 1. 인접 노드를 모두 방문하고,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 2. 자기 자신의 바꾸는 여지를 정함."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 인접 노드 방문 전에 현재 O를 X로 바꾸는 로직이 필요하다"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // O"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    /**"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "        목적: dfs가 tf를 반환하여 인접 노드 방문한 결과값이 t/f를 반환하게 한다."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "        조건:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "        - 모든 인접이 X이면? 현재 노드를 X로 바꾼다"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "        - 모든 인접이 X가 아니면? O인 노드로 이동한다"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "        - 현재 노드의 r, c가 0이나 r,cSize-1이면? 변환하지 않는다 - 위에서 false 변환"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "         **/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: "      let"
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
            children: "      let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " isChange "
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "      if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (nr "
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
            children: " nc "
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
            children: " nr "
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
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " c "
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
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: " !"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "visited[nr][nc]) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "        isChange "
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
            children: "([nr, nc]);"
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
            children: " (isChange) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "          board[r][c] "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \""
          }), createVNode(_components.span, {
            style: {
              color: "#E7EE98"
            },
            children: "X"
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\""
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
            children: " isCurrentEdge;"
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
              color: "#7B7F8B"
            },
            children: "  // board 자체를 dfs 내부에서 변환한 뒤 리턴."
          })
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
            children: " board;"
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

const url = "site/content/algorithms/leetcode/130-surrounded-regions.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/130-surrounded-regions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/130-surrounded-regions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
