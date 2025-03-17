/** @desc
 * - as const  변수에서 객체의 키를 리터럴 스트링 유니온 타입으로 추출하는 커스텀 유틸리티 타입
 * - extracts  literal strings typed keys from object value
 * @T <typeof T = object value>
 * **/
export type KeysOf<T = Record<string, unknown>> = keyof T;

/** @desc
 * - 객체의 키에서 부분 집합을 추출하는 커스텀 유틸리티 타입.
 *   - Extract<T, K>와 달리, 객체 키에도 타입 추론 적용.
 * - Custom Utility type: extracts subset of keys from object value (as const)
 * @Value Insert <typeof object value>
 * @Select Insert "{key names}" to select subset from Value
 * - key name is inferred, avail to use auto-completion and type check
 * **/
export type SubsetOfKeys<
  Object,
  SubsetKeys extends KeysOf<Object>,
> = Object[SubsetKeys];
