import { jest, expect, describe, test, beforeEach } from "@jest/globals";
import config from '../../../server/config.js';
import TestUtil from '../_util/testUtil.js';
import { Controller } from "../../../server/controller.js";
import { Service } from "../../../server/service.js";

const { pages } = config;

describe('#Controller - test suite for controller', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  })

  test('getFileStream - should return a fileStream', async () => {
    const controller = new Controller();
    const mockFileStream = TestUtil.generateReadableStream(['test']);

    const getFileStream = jest
      .spyOn(Service.prototype, Service.prototype.getFileStream.name)
      .mockResolvedValue({
        stream: mockFileStream,
      });

      await controller.getFileStream(pages.homeHTML);

      expect(getFileStream).toBeCalledWith(pages.homeHTML);
  })
})
