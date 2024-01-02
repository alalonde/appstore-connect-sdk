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
import type { Decimal } from './Decimal';
import {
    DecimalFromJSON,
    DecimalFromJSONTyped,
    DecimalToJSON,
} from './Decimal';
import type { GameCenterLeaderboardFormatter } from './GameCenterLeaderboardFormatter';
import {
    GameCenterLeaderboardFormatterFromJSON,
    GameCenterLeaderboardFormatterFromJSONTyped,
    GameCenterLeaderboardFormatterToJSON,
} from './GameCenterLeaderboardFormatter';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardUpdateRequestDataAttributes
 */
export interface GameCenterLeaderboardUpdateRequestDataAttributes {
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    defaultFormatter?: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    submissionType?: GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreSortType?: GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreRangeStart?: Decimal;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    scoreRangeEnd?: Decimal;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    recurrenceRule?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterLeaderboardUpdateRequestDataAttributes
     */
    archived?: boolean;
}


/**
 * @export
 */
export const GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum = {
    BestScore: 'BEST_SCORE',
    MostRecentScore: 'MOST_RECENT_SCORE'
} as const;
export type GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum = typeof GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum[keyof typeof GameCenterLeaderboardUpdateRequestDataAttributesSubmissionTypeEnum];

/**
 * @export
 */
export const GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum = typeof GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum[keyof typeof GameCenterLeaderboardUpdateRequestDataAttributesScoreSortTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardUpdateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardUpdateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardUpdateRequestDataAttributes {
    return GameCenterLeaderboardUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultFormatter': !exists(json, 'defaultFormatter') ? undefined : GameCenterLeaderboardFormatterFromJSON(json['defaultFormatter']),
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'submissionType': !exists(json, 'submissionType') ? undefined : json['submissionType'],
        'scoreSortType': !exists(json, 'scoreSortType') ? undefined : json['scoreSortType'],
        'scoreRangeStart': !exists(json, 'scoreRangeStart') ? undefined : DecimalFromJSON(json['scoreRangeStart']),
        'scoreRangeEnd': !exists(json, 'scoreRangeEnd') ? undefined : DecimalFromJSON(json['scoreRangeEnd']),
        'recurrenceStartDate': !exists(json, 'recurrenceStartDate') ? undefined : (new Date(json['recurrenceStartDate'])),
        'recurrenceDuration': !exists(json, 'recurrenceDuration') ? undefined : json['recurrenceDuration'],
        'recurrenceRule': !exists(json, 'recurrenceRule') ? undefined : json['recurrenceRule'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
    };
}

export function GameCenterLeaderboardUpdateRequestDataAttributesToJSON(value?: GameCenterLeaderboardUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterToJSON(value.defaultFormatter),
        'referenceName': value.referenceName,
        'submissionType': value.submissionType,
        'scoreSortType': value.scoreSortType,
        'scoreRangeStart': DecimalToJSON(value.scoreRangeStart),
        'scoreRangeEnd': DecimalToJSON(value.scoreRangeEnd),
        'recurrenceStartDate': value.recurrenceStartDate === undefined ? undefined : (value.recurrenceStartDate.toISOString()),
        'recurrenceDuration': value.recurrenceDuration,
        'recurrenceRule': value.recurrenceRule,
        'archived': value.archived,
    };
}

