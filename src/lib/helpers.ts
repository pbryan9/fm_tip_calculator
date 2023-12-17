export function isNumericDecimal(formInputValue: string) {
  return formInputValue.match(/^[0-9]+\.?[0-9]{0,2}$/gm);
}

export function isNumericInteger(formInputValue: string) {
  return formInputValue.match(/^[0-9]{1,2}$/gm);
}

export function emitTipSelectedEvent() {
  const evt = new Event('standard-tip-percent-selected');
  window.dispatchEvent(evt);
}
