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
import type { GameCenterMatchmakingRule } from './GameCenterMatchmakingRule';
import {
    GameCenterMatchmakingRuleFromJSON,
    GameCenterMatchmakingRuleFromJSONTyped,
    GameCenterMatchmakingRuleToJSON,
} from './GameCenterMatchmakingRule';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingRulesResponse
 */
export interface GameCenterMatchmakingRulesResponse {
    /**
     * 
     * @type {Array<GameCenterMatchmakingRule>}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    data: Array<GameCenterMatchmakingRule>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingRulesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterMatchmakingRulesResponse interface.
 */
export function instanceOfGameCenterMatchmakingRulesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingRulesResponseFromJSON(json: any): GameCenterMatchmakingRulesResponse {
    return GameCenterMatchmakingRulesResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRulesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRulesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterMatchmakingRuleFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterMatchmakingRulesResponseToJSON(value?: GameCenterMatchmakingRulesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterMatchmakingRuleToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

