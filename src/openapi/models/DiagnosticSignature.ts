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
import type { DiagnosticSignatureAttributes } from './DiagnosticSignatureAttributes';
import {
    DiagnosticSignatureAttributesFromJSON,
    DiagnosticSignatureAttributesFromJSONTyped,
    DiagnosticSignatureAttributesToJSON,
} from './DiagnosticSignatureAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface DiagnosticSignature
 */
export interface DiagnosticSignature {
    /**
     * 
     * @type {string}
     * @memberof DiagnosticSignature
     */
    type: DiagnosticSignatureTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticSignature
     */
    id: string;
    /**
     * 
     * @type {DiagnosticSignatureAttributes}
     * @memberof DiagnosticSignature
     */
    attributes?: DiagnosticSignatureAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof DiagnosticSignature
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const DiagnosticSignatureTypeEnum = {
    DiagnosticSignatures: 'diagnosticSignatures'
} as const;
export type DiagnosticSignatureTypeEnum = typeof DiagnosticSignatureTypeEnum[keyof typeof DiagnosticSignatureTypeEnum];


/**
 * Check if a given object implements the DiagnosticSignature interface.
 */
export function instanceOfDiagnosticSignature(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DiagnosticSignatureFromJSON(json: any): DiagnosticSignature {
    return DiagnosticSignatureFromJSONTyped(json, false);
}

export function DiagnosticSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticSignature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : DiagnosticSignatureAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function DiagnosticSignatureToJSON(value?: DiagnosticSignature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': DiagnosticSignatureAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

