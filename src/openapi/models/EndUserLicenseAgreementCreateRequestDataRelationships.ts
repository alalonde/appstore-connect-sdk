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
import type { AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories } from './AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories';
import {
    AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON,
    AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped,
    AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON,
} from './AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories';
import type { AppAvailabilityV2CreateRequestDataRelationshipsApp } from './AppAvailabilityV2CreateRequestDataRelationshipsApp';
import {
    AppAvailabilityV2CreateRequestDataRelationshipsAppFromJSON,
    AppAvailabilityV2CreateRequestDataRelationshipsAppFromJSONTyped,
    AppAvailabilityV2CreateRequestDataRelationshipsAppToJSON,
} from './AppAvailabilityV2CreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementCreateRequestDataRelationships
 */
export interface EndUserLicenseAgreementCreateRequestDataRelationships {
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataRelationshipsApp}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    app: AppAvailabilityV2CreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    territories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequestDataRelationships interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "territories" in value;

    return isInstance;
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON(json: any): EndUserLicenseAgreementCreateRequestDataRelationships {
    return EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': AppAvailabilityV2CreateRequestDataRelationshipsAppFromJSON(json['app']),
        'territories': AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON(json['territories']),
    };
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON(value?: EndUserLicenseAgreementCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppAvailabilityV2CreateRequestDataRelationshipsAppToJSON(value.app),
        'territories': AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON(value.territories),
    };
}

