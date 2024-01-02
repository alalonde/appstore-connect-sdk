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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { InAppPurchaseLocalization } from './InAppPurchaseLocalization';
import {
    InAppPurchaseLocalizationFromJSON,
    InAppPurchaseLocalizationFromJSONTyped,
    InAppPurchaseLocalizationToJSON,
} from './InAppPurchaseLocalization';
import type { InAppPurchaseV2 } from './InAppPurchaseV2';
import {
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
} from './InAppPurchaseV2';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalizationResponse
 */
export interface InAppPurchaseLocalizationResponse {
    /**
     * 
     * @type {InAppPurchaseLocalization}
     * @memberof InAppPurchaseLocalizationResponse
     */
    data: InAppPurchaseLocalization;
    /**
     * 
     * @type {Array<InAppPurchaseV2>}
     * @memberof InAppPurchaseLocalizationResponse
     */
    included?: Array<InAppPurchaseV2>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof InAppPurchaseLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the InAppPurchaseLocalizationResponse interface.
 */
export function instanceOfInAppPurchaseLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationResponseFromJSON(json: any): InAppPurchaseLocalizationResponse {
    return InAppPurchaseLocalizationResponseFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(InAppPurchaseV2FromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseLocalizationResponseToJSON(value?: InAppPurchaseLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(InAppPurchaseV2ToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

