interface String {
  isNullOrWhitespace(): boolean;
}

String.prototype.isNullOrWhitespace = function (): boolean {
  const input = this;
  if (typeof input === 'undefined' || input == null) {
    return true;
  }

  return input.replace(/\s/g, '').length < 1;
};
