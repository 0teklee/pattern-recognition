import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CTjLOdeR.mjs';
import 'clsx';

const frontmatter = {
  "title": "LeetCode 3. Longest Substring Without Repeating Characters",
  "description": "LeetCode problem",
  "createdAt": "2025-03-17",
  "path": ["algorithms", "leetcode", "sliding-window"],
  "tags": {
    "pattern": "sliding-window",
    "category": "leetcode"
  }
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "leetcode-3-longest-substring---sliding-windows",
    "text": "LeetCode 3. Longest Substring - Sliding Windows"
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
      id: "leetcode-3-longest-substring---sliding-windows",
      children: "LeetCode 3. Longest Substring - Sliding Windows"
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
        children: "Hash Table"
      }), "\n", createVNode(_components.li, {
        children: "String"
      }), "\n", createVNode(_components.li, {
        children: "Sliding Window"
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
        children: "새로운 연결 리스트 생성 오류"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "returnList를 리스트로 변환하려 했으나 next 추가 방식이 틀림.\n올바른 방식은 새로운 ListNode를 생성하고 current.next로 연결해야 함.\n반복문에서 next 추가 방법 문제"
    }), "\n", createVNode(_components.p, {
      children: "returnList(start, next)는 올바르지 않음.\ndummyHead 노드를 두고 current 포인터를 활용하여 next로 연결해야 함."
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "리스트 숫자 변환 오류 (getAllNum 함수)"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "while (li?.val) → while (li !== null)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "nums.unshift(li.val) 대신 nums.push(li.val)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "join(\"\") * 1 대신 Number(join(\"\")) 또는 BigInt(join(\"\")) 사용해야 큰 숫자 처리 가능."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
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
              color: "#F286C4"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BF9EEE"
            },
            children: "1"
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
          }), createVNode(_components.span, {
            style: {
              color: "#F286C4"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "set."
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
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#F6F6F4"
            },
            children: "(char);"
          })]
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
              color: "#F6F6F4"
            },
            children: "      longest "
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
            children: ");"
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
              color: "#7B7F8B"
            },
            children: "      // set 초기화? 업데이트? 어떻게 해야하지."
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

const url = "site/content/algorithms/leetcode/3-longest-substring.mdx";
const file = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/3-longest-substring.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/tekwoo/Desktop/work/code-projects/pattern-recognition/site/content/algorithms/leetcode/3-longest-substring.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
