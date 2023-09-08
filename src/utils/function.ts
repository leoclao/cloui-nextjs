// Get Key By Value
export function getKeyByValue(eObj: any, value: number): any {
  for (const key in eObj) {
    if (eObj[key] === value) {
      return key;
    }
  }
  return undefined;
}

// Check value
export function checkValue(value: any): boolean {
  if (value === 0) {
    return true;
  } else if (typeof value === "string" && value.length > 0) {
    return true;
  } else if (Array.isArray(value) && value.length > 0) {
    return true;
  } else if (typeof value === "object" && Object.keys(value).length > 0) {
    return true;
  } else if (typeof value === "boolean" && value === true) {
    return true;
  }
  return false;
}
