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
/**
 * 
 * @export
 * @interface AppStoreVersionLocalizationCreateRequestDataAttributes
 */
export interface AppStoreVersionLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    keywords?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    promotionalText?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    supportUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestDataAttributes
     */
    whatsNew?: string;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionLocalizationCreateRequestDataAttributes {
    return AppStoreVersionLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'locale': json['locale'],
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'marketingUrl': !exists(json, 'marketingUrl') ? undefined : json['marketingUrl'],
        'promotionalText': !exists(json, 'promotionalText') ? undefined : json['promotionalText'],
        'supportUrl': !exists(json, 'supportUrl') ? undefined : json['supportUrl'],
        'whatsNew': !exists(json, 'whatsNew') ? undefined : json['whatsNew'],
    };
}

export function AppStoreVersionLocalizationCreateRequestDataAttributesToJSON(value?: AppStoreVersionLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'locale': value.locale,
        'keywords': value.keywords,
        'marketingUrl': value.marketingUrl,
        'promotionalText': value.promotionalText,
        'supportUrl': value.supportUrl,
        'whatsNew': value.whatsNew,
    };
}

