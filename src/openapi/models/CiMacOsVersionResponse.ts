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
import type { CiMacOsVersion } from './CiMacOsVersion';
import {
    CiMacOsVersionFromJSON,
    CiMacOsVersionFromJSONTyped,
    CiMacOsVersionToJSON,
} from './CiMacOsVersion';
import type { CiXcodeVersion } from './CiXcodeVersion';
import {
    CiXcodeVersionFromJSON,
    CiXcodeVersionFromJSONTyped,
    CiXcodeVersionToJSON,
} from './CiXcodeVersion';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiMacOsVersionResponse
 */
export interface CiMacOsVersionResponse {
    /**
     * 
     * @type {CiMacOsVersion}
     * @memberof CiMacOsVersionResponse
     */
    data: CiMacOsVersion;
    /**
     * 
     * @type {Array<CiXcodeVersion>}
     * @memberof CiMacOsVersionResponse
     */
    included?: Array<CiXcodeVersion>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiMacOsVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiMacOsVersionResponse interface.
 */
export function instanceOfCiMacOsVersionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiMacOsVersionResponseFromJSON(json: any): CiMacOsVersionResponse {
    return CiMacOsVersionResponseFromJSONTyped(json, false);
}

export function CiMacOsVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiMacOsVersionFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(CiXcodeVersionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiMacOsVersionResponseToJSON(value?: CiMacOsVersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiMacOsVersionToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(CiXcodeVersionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

