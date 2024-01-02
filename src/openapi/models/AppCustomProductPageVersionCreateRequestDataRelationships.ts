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
import type { AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage } from './AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage';
import {
    AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSON,
    AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSONTyped,
    AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageToJSON,
} from './AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage';
import type { AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations } from './AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations';
import {
    AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSON,
    AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSONTyped,
    AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsToJSON,
} from './AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionCreateRequestDataRelationships
 */
export interface AppCustomProductPageVersionCreateRequestDataRelationships {
    /**
     * 
     * @type {AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage}
     * @memberof AppCustomProductPageVersionCreateRequestDataRelationships
     */
    appCustomProductPage: AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPage;
    /**
     * 
     * @type {AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations}
     * @memberof AppCustomProductPageVersionCreateRequestDataRelationships
     */
    appCustomProductPageLocalizations?: AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizations;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionCreateRequestDataRelationships interface.
 */
export function instanceOfAppCustomProductPageVersionCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appCustomProductPage" in value;

    return isInstance;
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsFromJSON(json: any): AppCustomProductPageVersionCreateRequestDataRelationships {
    return AppCustomProductPageVersionCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appCustomProductPage': AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageFromJSON(json['appCustomProductPage']),
        'appCustomProductPageLocalizations': !exists(json, 'appCustomProductPageLocalizations') ? undefined : AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsFromJSON(json['appCustomProductPageLocalizations']),
    };
}

export function AppCustomProductPageVersionCreateRequestDataRelationshipsToJSON(value?: AppCustomProductPageVersionCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appCustomProductPage': AppCustomProductPageVersionCreateRequestDataRelationshipsAppCustomProductPageToJSON(value.appCustomProductPage),
        'appCustomProductPageLocalizations': AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageLocalizationsToJSON(value.appCustomProductPageLocalizations),
    };
}

