/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeviceCountsOKResponse.
 */
class DeviceCountsOKResponse {
  /**
   * Create a DeviceCountsOKResponse.
   * @property {array} [daily] The active device count for each interval.
   * @property {array} [weekly] The active device count for each interval with
   * a week's retention.
   * @property {array} [monthly] The active device count for each interval with
   * a month's retention.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceCountsOKResponse
   *
   * @returns {object} metadata of DeviceCountsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceCountsOKResponse',
      type: {
        name: 'Composite',
        className: 'DeviceCountsOKResponse',
        modelProperties: {
          daily: {
            required: false,
            serializedName: 'daily',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeviceCountsOKResponseDailyItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeviceCountsOKResponseDailyItem'
                  }
              }
            }
          },
          weekly: {
            required: false,
            serializedName: 'weekly',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeviceCountsOKResponseWeeklyItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeviceCountsOKResponseWeeklyItem'
                  }
              }
            }
          },
          monthly: {
            required: false,
            serializedName: 'monthly',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeviceCountsOKResponseMonthlyItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeviceCountsOKResponseMonthlyItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceCountsOKResponse;
