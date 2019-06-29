/**
 * Generate a unique identifier.
 * Source: http://guid.us/GUID/JavaScript
 */
export function generateUuid() {
    const segment = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return (
      segment() +
      segment() +
      '-' +
      segment() +
      '-4' +
      segment().substr(0, 3) +
      '-' +
      segment() +
      '-' +
      segment() +
      segment() +
      segment()
    ).toLowerCase();
  }
  