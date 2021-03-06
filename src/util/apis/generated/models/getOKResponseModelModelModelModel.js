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
 * Notification statistics
 *
 */
class GetOKResponseModelModelModelModel {
  /**
   * Create a GetOKResponseModelModelModelModel.
   * @property {string} notificationId Notification id.
   * @property {string} [name] Notification name
   * @property {object} [notificationTarget] Type of Notification target
   * (audiences, devices, user ids, account ids or broadcast). The object must
   * include the correct properties for the specified target type except for
   * broadcast.
   * @property {string} [notificationTarget.type] Polymorphic Discriminator
   * @property {date} [sendTime] Notification send time
   * @property {number} [pnsSendFailure] Number of the notifications failed to
   * send to the push provider.
   * @property {number} [pnsSendSuccess] Number of the notifications
   * successfully sent to push the provider.
   * @property {string} state State of the notification. Possible values
   * include: 'Queued', 'Sending', 'Completed', 'Failed', 'NoTargetFound'
   * @property {object} notificationContent Notification definition object
   * @property {string} [notificationContent.name] Notification name
   * @property {string} [notificationContent.title] Notification title
   * @property {string} [notificationContent.body] Notification body
   * @property {object} [notificationContent.customData] Notification custom
   * data (such as badge, color, sound, etc.)
   * @property {array} [failureOutcomes] Failture outcome counts
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetOKResponseModelModelModelModel
   *
   * @returns {object} metadata of GetOKResponseModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetOKResponse',
      type: {
        name: 'Composite',
        className: 'GetOKResponseModelModelModelModel',
        modelProperties: {
          notificationId: {
            required: true,
            serializedName: 'notification_id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 64
            },
            type: {
              name: 'String'
            }
          },
          notificationTarget: {
            required: false,
            serializedName: 'notification_target',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'GetOKResponseNotificationTarget',
              className: 'GetOKResponseNotificationTarget'
            }
          },
          sendTime: {
            required: false,
            serializedName: 'send_time',
            type: {
              name: 'DateTime'
            }
          },
          pnsSendFailure: {
            required: false,
            serializedName: 'pns_send_failure',
            type: {
              name: 'Number'
            }
          },
          pnsSendSuccess: {
            required: false,
            serializedName: 'pns_send_success',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          notificationContent: {
            required: true,
            serializedName: 'notification_content',
            type: {
              name: 'Composite',
              className: 'GetOKResponseNotificationContent'
            }
          },
          failureOutcomes: {
            required: false,
            serializedName: 'failure_outcomes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetOKResponseFailureOutcomesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetOKResponseFailureOutcomesItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetOKResponseModelModelModelModel;
