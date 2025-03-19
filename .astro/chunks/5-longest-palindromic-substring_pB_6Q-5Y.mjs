import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 5. Longest Palindromic Substring",
  "description": "LeetCode problem 5",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "dynamic-programming"],
  "tags": {
    "pattern": "dynamic-programming",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "leetcode-5-longest-substring---sliding-windows",
    "text": "LeetCode 5. Longest Substring - Sliding Windows"
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
      id: "leetcode-5-longest-substring---sliding-windows",
      children: "LeetCode 5. Longest Substring - Sliding Windows"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://leetcode.com/problems/longest-palindromic-substring/",
        children: "문제 링크"
      })
    }), "\n", createVNode(_components.h1, {
      id: "topics",
      children: "Topics"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "String"
      }), "\n", createVNode(_components.li, {
        children: "Two Pointers"
      }), "\n", createVNode(_components.li, {
        children: "Dynamic Programming"
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
            children: " lengthOfLongestSubstring"
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " set "
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
            children: " longest "
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
            children: " end "
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
            children: "; end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s.length; end"
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
            children: "    let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " char "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s[end];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    // 중복 문자가 존재하면 앞에서 제거하면서 윈도우 이동"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "    /**"
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@note"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " 이 부분에서 s[start]로 start를 움직이고, set에서 제거함"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "     * "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "@note"
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: " Sliding Window의 가변 크기가 구현됨"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "     * **/"
          })
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
            children: " (set."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "has"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(char)) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      set."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "delete"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(s[start]);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "      start"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    set."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(char); "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 새로운 문자 추가"
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
            children: " 업데이트 시점은 set의 변경 이후에 실행함 **/"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    longest "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "max"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(longest, end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start "
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
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// 길이 갱신"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " longest;"
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
        children: "성능 최적화. reverse로 비교하는 비용이 너무 크다"
      }), "\n", createVNode(_components.li, {
        children: "예외처리: 한글자, 같은 두글자일때 등. 좀 더 추상적인 로직으로 개별 예외처리 안할 수도 있을텐데."
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
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: " 1"
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
            children: " s;"
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
            children: " longest "
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
            children: "    start "
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
            children: "    n "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s.length,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    result "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: " \"\""
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
            children: "  while"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (start "
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
            children: " end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " start "
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
            children: "; end "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " n; end"
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
            children: "      let"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " slice "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
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
            children: "(start, end "
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
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#7B7F8B"
            },
            children: "// + 1 ?"
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
            children: " reverse "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " slice."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "split"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\"\""
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "reverse"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#62E884"
            },
            children: "join"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#DEE492"
            },
            children: "\"\""
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
            children: "      if"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " (slice "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " reverse "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "&&"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " slice.length "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: ">="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " longest) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "        result "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " slice;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "        longest "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " slice.length;"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "    start"
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
            children: " result "
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: " s["
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "];"
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

const url = "site/content/algorithms/leetcode/5-longest-palindromic-substring.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/5-longest-palindromic-substring.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/5-longest-palindromic-substring.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
