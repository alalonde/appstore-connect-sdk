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
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSets';
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSets } from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSets';
import {
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSets';
import type { AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment } from './AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment';
import {
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSON,
} from './AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalizationRelationships
 */
export interface AppStoreVersionExperimentTreatmentLocalizationRelationships {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appStoreVersionExperimentTreatment?: AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSets}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appScreenshotSets?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSets}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationRelationships
     */
    appPreviewSets?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationRelationships interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationRelationships {
    return AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionExperimentTreatment': !exists(json, 'appStoreVersionExperimentTreatment') ? undefined : AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSON(json['appStoreVersionExperimentTreatment']),
        'appScreenshotSets': !exists(json, 'appScreenshotSets') ? undefined : AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json['appScreenshotSets']),
        'appPreviewSets': !exists(json, 'appPreviewSets') ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json['appPreviewSets']),
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSON(value?: AppStoreVersionExperimentTreatmentLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionExperimentTreatment': AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSON(value.appStoreVersionExperimentTreatment),
        'appScreenshotSets': AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(value.appScreenshotSets),
        'appPreviewSets': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value.appPreviewSets),
    };
}

