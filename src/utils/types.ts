// Enum: Theme
export enum eTheme {
  Primary,
  Secondary,
  Tertiary,
}

// Enum: Size
export enum eSize {
  Tiny,
  Smaller,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
  XXXLarge,
  Big,
  Huge,
}

// Enum: Aspect Ratio
export enum aspectRatio {
  Auto, // auto
  Square, // 1:1
  Television, // 4:3
  Video, // 16:9
  UltraWide, // 21:9
  SuperUltraWide // 32:9
}

// Enum: Direction
export enum eDirection {
  Vertical,
  Horizontal
}

// Enum Geometry
export enum eGeometry {
  Line,
  Circle,
}

// Enum states
export enum eState {
  Empty,
  Focused,
  Filled,
  Valid,
  Invalid,
  Confirmed,
  Unconfirmed,
  Disabled
}

// Enum: messages
export enum eMessage {
  Info,
  Instruction,
  Loading,
  Success,
  Warning,
  Error
}

// Enum: errors
export enum eError {
  Required,
  Format,
  Mismatch,
  Length, // Too short or too long
  Invalid,
  Submission
}
