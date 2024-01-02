/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppPreviewSetRelationshipsAppCustomProductPageLocalization } from './AppPreviewSetRelationshipsAppCustomProductPageLocalization';
import {
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSON,
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppCustomProductPageLocalization';
import type { AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization } from './AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import {
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import type { AppPreviewSetRelationshipsAppStoreVersionLocalization } from './AppPreviewSetRelationshipsAppStoreVersionLocalization';
import {
    AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppStoreVersionLocalization';
import type { AppScreenshotSetRelationshipsAppScreenshots } from './AppScreenshotSetRelationshipsAppScreenshots';
import {
    AppScreenshotSetRelationshipsAppScreenshotsFromJSON,
    AppScreenshotSetRelationshipsAppScreenshotsFromJSONTyped,
    AppScreenshotSetRelationshipsAppScreenshotsToJSON,
} from './AppScreenshotSetRelationshipsAppScreenshots';

/**
 * 
 * @export
 * @interface AppScreenshotSetRelationships
 */
export interface AppScreenshotSetRelationships {
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionLocalization}
     * @memberof AppScreenshotSetRelationships
     */
    appStoreVersionLocalization?: AppPreviewSetRelationshipsAppStoreVersionLocalization;
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppCustomProductPageLocalization}
     * @memberof AppScreenshotSetRelationships
     */
    appCustomProductPageLocalization?: AppPreviewSetRelationshipsAppCustomProductPageLocalization;
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization}
     * @memberof AppScreenshotSetRelationships
     */
    appStoreVersionExperimentTreatmentLocalization?: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization;
    /**
     * 
     * @type {AppScreenshotSetRelationshipsAppScreenshots}
     * @memberof AppScreenshotSetRelationships
     */
    appScreenshots?: AppScreenshotSetRelationshipsAppScreenshots;
}

/**
 * Check if a given object implements the AppScreenshotSetRelationships interface.
 */
export function instanceOfAppScreenshotSetRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppScreenshotSetRelationshipsFromJSON(json: any): AppScreenshotSetRelationships {
    return AppScreenshotSetRelationshipsFromJSONTyped(json, false);
}

export function AppScreenshotSetRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionLocalization': !exists(json, 'appStoreVersionLocalization') ? undefined : AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON(json['appStoreVersionLocalization']),
        'appCustomProductPageLocalization': !exists(json, 'appCustomProductPageLocalization') ? undefined : AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSON(json['appCustomProductPageLocalization']),
        'appStoreVersionExperimentTreatmentLocalization': !exists(json, 'appStoreVersionExperimentTreatmentLocalization') ? undefined : AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON(json['appStoreVersionExperimentTreatmentLocalization']),
        'appScreenshots': !exists(json, 'appScreenshots') ? undefined : AppScreenshotSetRelationshipsAppScreenshotsFromJSON(json['appScreenshots']),
    };
}

export function AppScreenshotSetRelationshipsToJSON(value?: AppScreenshotSetRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionLocalization': AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON(value.appStoreVersionLocalization),
        'appCustomProductPageLocalization': AppPreviewSetRelationshipsAppCustomProductPageLocalizationToJSON(value.appCustomProductPageLocalization),
        'appStoreVersionExperimentTreatmentLocalization': AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON(value.appStoreVersionExperimentTreatmentLocalization),
        'appScreenshots': AppScreenshotSetRelationshipsAppScreenshotsToJSON(value.appScreenshots),
    };
}

