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
import type { BetaGroup } from './BetaGroup';
import {
    BetaGroupFromJSON,
    BetaGroupFromJSONTyped,
    BetaGroupToJSON,
} from './BetaGroup';
import type { BetaGroupsResponseIncludedInner } from './BetaGroupsResponseIncludedInner';
import {
    BetaGroupsResponseIncludedInnerFromJSON,
    BetaGroupsResponseIncludedInnerFromJSONTyped,
    BetaGroupsResponseIncludedInnerToJSON,
} from './BetaGroupsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaGroupResponse
 */
export interface BetaGroupResponse {
    /**
     * 
     * @type {BetaGroup}
     * @memberof BetaGroupResponse
     */
    data: BetaGroup;
    /**
     * 
     * @type {Array<BetaGroupsResponseIncludedInner>}
     * @memberof BetaGroupResponse
     */
    included?: Array<BetaGroupsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaGroupResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaGroupResponse interface.
 */
export function instanceOfBetaGroupResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaGroupResponseFromJSON(json: any): BetaGroupResponse {
    return BetaGroupResponseFromJSONTyped(json, false);
}

export function BetaGroupResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaGroupFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BetaGroupsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaGroupResponseToJSON(value?: BetaGroupResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaGroupToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BetaGroupsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

