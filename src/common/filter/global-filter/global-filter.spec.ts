import { ArgumentsHost, HttpException } from '@nestjs/common';
import { GlobalFilter } from './global-filter';
import { BaseExceptionFilter } from '@nestjs/core';

describe('GlobalFilter', () => {
  it('should be defined', () => {
    expect(new GlobalFilter()).toBeDefined();
  });

  describe('catch', () => {
    it('should call super.catch', () => {
      const filter = new GlobalFilter();
      const exception = new HttpException('Test', 500);
      const host = {} as unknown as ArgumentsHost;
      const spy = jest
        .spyOn(BaseExceptionFilter.prototype, 'catch')
        .mockImplementation(() => jest.fn());
      filter.catch(exception, host);
      expect(spy).toHaveBeenCalledWith(exception, host);
    });
  });
});
