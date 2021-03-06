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
 * Android signing config. Null if not specified
 *
 */
class AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig {
  /**
   * Create a AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig.
   * @property {boolean} [hasStoreFile] Indicates if storeFile is specified in
   * the signing configuration
   */
  constructor() {
  }

  /**
   * Defines the metadata of AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig
   *
   * @returns {object} metadata of AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AndroidProject_androidModulesItem_buildConfigurationsItem_signingConfig',
      type: {
        name: 'Composite',
        className: 'AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig',
        modelProperties: {
          hasStoreFile: {
            required: false,
            serializedName: 'hasStoreFile',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AndroidProjectAndroidModulesItemBuildConfigurationsItemSigningConfig;
