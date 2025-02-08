//GENDER
export const MALE = "male";
export const FEMALE = "female";
export type GenderProps = typeof MALE | typeof FEMALE;

//SIZE
export const SMALL = "small";
export const MEDIUM = "medium";
export const LARGE = "large";
export type SizeProps = typeof SMALL | typeof MEDIUM | typeof LARGE;

//STATE
export const ADOPTION = "adoption";
export const ADOPTED = "adopted";
export const FOSTER = "foster";
export const FOUND = "found";
export const LOST = "lost";
export type StateProps = typeof ADOPTION | typeof ADOPTED | typeof FOSTER | typeof FOUND | typeof LOST;