import { sortCsvColumns } from './sort-csv-file'
import { describe, test, expect } from 'vitest'

describe('sortCsvColumns', () => {
  test('input is single character strings', () => {
    expect(sortCsvColumns('b;a;c;d\n2;1;3;4\n6;5;7;8')).toBe('a;b;c;d\n1;2;3;4\n5;6;7;8')
  })

  test('input is more than one single character strings', () => {
    expect(sortCsvColumns('basd;aasd;casd;dqqwe\n2123;123;3452;4234\n623423;5234;732;813532')).toBe(
      'aasd;basd;casd;dqqwe\n123;2123;3452;4234\n5234;623423;732;813532'
    )
  })
})
