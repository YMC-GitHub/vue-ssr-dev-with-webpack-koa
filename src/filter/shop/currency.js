const digitsRE = /(\d{3})(?=\d)/g

export function currency(value, _currency, decimals) {
  value = parseFloat(value)
  // eslint-disable-next-line no-restricted-globals
  if (!isFinite(value) || (!value && value !== 0)) return ''
  _currency = _currency != null ? _currency : '$'
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(value).toFixed(decimals)
  const int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  const i = int.length % 3
  const head = i > 0 ? int.slice(0, i) + (int.length > 3 ? ',' : '') : ''
  const float = decimals ? stringified.slice(-1 - decimals) : ''
  const sign = value < 0 ? '-' : ''
  return (
    sign + _currency + head + int.slice(i).replace(digitsRE, '$1,') + float
  )
}
