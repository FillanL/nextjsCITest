import React from 'react';
import render from '@testing-library/react';
import '@testing-library/jest-dom';
import { addNum } from '../utils';

console.log(jest)
describe('util helper test', () => {
	// const mock =
	test('add two nums together ', () => {
		const results: number | null = addNum(2, 4);
		expect(results).toBe(6);
	});
	test('only numbers ', () => {
		const results: number | null = addNum('b', 's');
		expect(results).toBe(null);
	});
});
