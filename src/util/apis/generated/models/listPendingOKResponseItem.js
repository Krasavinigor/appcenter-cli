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
 * Class representing a ListPendingOKResponseItem.
 */
class ListPendingOKResponseItem {
  /**
   * Create a ListPendingOKResponseItem.
   * @property {uuid} id The unique ID (UUID) of the invitation
   * @property {string} email The email address of the invited user
   * @property {string} role The role assigned to the invited user
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListPendingOKResponseItem
   *
   * @returns {object} metadata of ListPendingOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListPendingOKResponseItem',
      type: {
        name: 'Composite',
        className: 'ListPendingOKResponseItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          role: {
            required: true,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListPendingOKResponseItem;
