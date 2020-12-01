import { equals } from "ramda";

export function isEnterKeyPressed(event) { return equals(event.key, 'Enter') };
