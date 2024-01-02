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
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import {
    BetaLicenseAgreementAttributesFromJSON,
    BetaLicenseAgreementAttributesFromJSONTyped,
    BetaLicenseAgreementAttributesToJSON,
} from './BetaLicenseAgreementAttributes';
import type { EndUserLicenseAgreementRelationships } from './EndUserLicenseAgreementRelationships';
import {
    EndUserLicenseAgreementRelationshipsFromJSON,
    EndUserLicenseAgreementRelationshipsFromJSONTyped,
    EndUserLicenseAgreementRelationshipsToJSON,
} from './EndUserLicenseAgreementRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreement
 */
export interface EndUserLicenseAgreement {
    /**
     * 
     * @type {string}
     * @memberof EndUserLicenseAgreement
     */
    type: EndUserLicenseAgreementTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EndUserLicenseAgreement
     */
    id: string;
    /**
     * 
     * @type {BetaLicenseAgreementAttributes}
     * @memberof EndUserLicenseAgreement
     */
    attributes?: BetaLicenseAgreementAttributes;
    /**
     * 
     * @type {EndUserLicenseAgreementRelationships}
     * @memberof EndUserLicenseAgreement
     */
    relationships?: EndUserLicenseAgreementRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof EndUserLicenseAgreement
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const EndUserLicenseAgreementTypeEnum = {
    EndUserLicenseAgreements: 'endUserLicenseAgreements'
} as const;
export type EndUserLicenseAgreementTypeEnum = typeof EndUserLicenseAgreementTypeEnum[keyof typeof EndUserLicenseAgreementTypeEnum];


/**
 * Check if a given object implements the EndUserLicenseAgreement interface.
 */
export function instanceOfEndUserLicenseAgreement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function EndUserLicenseAgreementFromJSON(json: any): EndUserLicenseAgreement {
    return EndUserLicenseAgreementFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaLicenseAgreementAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : EndUserLicenseAgreementRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function EndUserLicenseAgreementToJSON(value?: EndUserLicenseAgreement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaLicenseAgreementAttributesToJSON(value.attributes),
        'relationships': EndUserLicenseAgreementRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

