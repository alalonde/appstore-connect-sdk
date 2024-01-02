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


import * as runtime from '../runtime';
import type {
  AppWithoutIncludesResponse,
  BundleIdCapabilitiesWithoutIncludesResponse,
  BundleIdCreateRequest,
  BundleIdResponse,
  BundleIdUpdateRequest,
  BundleIdsResponse,
  ErrorResponse,
  ProfilesWithoutIncludesResponse,
} from '../models';
import {
    AppWithoutIncludesResponseFromJSON,
    AppWithoutIncludesResponseToJSON,
    BundleIdCapabilitiesWithoutIncludesResponseFromJSON,
    BundleIdCapabilitiesWithoutIncludesResponseToJSON,
    BundleIdCreateRequestFromJSON,
    BundleIdCreateRequestToJSON,
    BundleIdResponseFromJSON,
    BundleIdResponseToJSON,
    BundleIdUpdateRequestFromJSON,
    BundleIdUpdateRequestToJSON,
    BundleIdsResponseFromJSON,
    BundleIdsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ProfilesWithoutIncludesResponseFromJSON,
    ProfilesWithoutIncludesResponseToJSON,
} from '../models';

export interface BundleIdsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BundleIdsAppGetToOneRelatedFieldsAppsEnum>;
}

export interface BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest {
    id: string;
    fieldsBundleIdCapabilities?: Array<BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum>;
    limit?: number;
}

export interface BundleIdsCreateInstanceRequest {
    bundleIdCreateRequest: BundleIdCreateRequest;
}

export interface BundleIdsDeleteInstanceRequest {
    id: string;
}

export interface BundleIdsGetCollectionRequest {
    filterIdentifier?: Array<string>;
    filterName?: Array<string>;
    filterPlatform?: Array<BundleIdsGetCollectionFilterPlatformEnum>;
    filterSeedId?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<BundleIdsGetCollectionSortEnum>;
    fieldsBundleIds?: Array<BundleIdsGetCollectionFieldsBundleIdsEnum>;
    limit?: number;
    include?: Array<BundleIdsGetCollectionIncludeEnum>;
    fieldsBundleIdCapabilities?: Array<BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum>;
    fieldsProfiles?: Array<BundleIdsGetCollectionFieldsProfilesEnum>;
    fieldsApps?: Array<BundleIdsGetCollectionFieldsAppsEnum>;
    limitBundleIdCapabilities?: number;
    limitProfiles?: number;
}

export interface BundleIdsGetInstanceRequest {
    id: string;
    fieldsBundleIds?: Array<BundleIdsGetInstanceFieldsBundleIdsEnum>;
    include?: Array<BundleIdsGetInstanceIncludeEnum>;
    fieldsBundleIdCapabilities?: Array<BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum>;
    fieldsProfiles?: Array<BundleIdsGetInstanceFieldsProfilesEnum>;
    fieldsApps?: Array<BundleIdsGetInstanceFieldsAppsEnum>;
    limitBundleIdCapabilities?: number;
    limitProfiles?: number;
}

export interface BundleIdsProfilesGetToManyRelatedRequest {
    id: string;
    fieldsProfiles?: Array<BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum>;
    limit?: number;
}

export interface BundleIdsUpdateInstanceRequest {
    id: string;
    bundleIdUpdateRequest: BundleIdUpdateRequest;
}

/**
 * 
 */
export class BundleIdsApi extends runtime.BaseAPI {

    /**
     */
    async bundleIdsAppGetToOneRelatedRaw(requestParameters: BundleIdsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsAppGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsAppGetToOneRelated(requestParameters: BundleIdsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppWithoutIncludesResponse> {
        const response = await this.bundleIdsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters: BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdCapabilitiesWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsBundleIdCapabilitiesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}/bundleIdCapabilities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdCapabilitiesWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsBundleIdCapabilitiesGetToManyRelated(requestParameters: BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdCapabilitiesWithoutIncludesResponse> {
        const response = await this.bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsCreateInstanceRaw(requestParameters: BundleIdsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.bundleIdCreateRequest === null || requestParameters.bundleIdCreateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdCreateRequest','Required parameter requestParameters.bundleIdCreateRequest was null or undefined when calling bundleIdsCreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdCreateRequestToJSON(requestParameters.bundleIdCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsCreateInstance(requestParameters: BundleIdsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsDeleteInstanceRaw(requestParameters: BundleIdsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async bundleIdsDeleteInstance(requestParameters: BundleIdsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bundleIdsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bundleIdsGetCollectionRaw(requestParameters: BundleIdsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterIdentifier) {
            queryParameters['filter[identifier]'] = requestParameters.filterIdentifier.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterName) {
            queryParameters['filter[name]'] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterPlatform) {
            queryParameters['filter[platform]'] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterSeedId) {
            queryParameters['filter[seedId]'] = requestParameters.filterSeedId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBundleIds) {
            queryParameters['fields[bundleIds]'] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBundleIdCapabilities !== undefined) {
            queryParameters['limit[bundleIdCapabilities]'] = requestParameters.limitBundleIdCapabilities;
        }

        if (requestParameters.limitProfiles !== undefined) {
            queryParameters['limit[profiles]'] = requestParameters.limitProfiles;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdsResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsGetCollection(requestParameters: BundleIdsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdsResponse> {
        const response = await this.bundleIdsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsGetInstanceRaw(requestParameters: BundleIdsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBundleIds) {
            queryParameters['fields[bundleIds]'] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBundleIdCapabilities !== undefined) {
            queryParameters['limit[bundleIdCapabilities]'] = requestParameters.limitBundleIdCapabilities;
        }

        if (requestParameters.limitProfiles !== undefined) {
            queryParameters['limit[profiles]'] = requestParameters.limitProfiles;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsGetInstance(requestParameters: BundleIdsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsProfilesGetToManyRelatedRaw(requestParameters: BundleIdsProfilesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfilesWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsProfilesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}/profiles`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfilesWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsProfilesGetToManyRelated(requestParameters: BundleIdsProfilesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfilesWithoutIncludesResponse> {
        const response = await this.bundleIdsProfilesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdsUpdateInstanceRaw(requestParameters: BundleIdsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdsUpdateInstance.');
        }

        if (requestParameters.bundleIdUpdateRequest === null || requestParameters.bundleIdUpdateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdUpdateRequest','Required parameter requestParameters.bundleIdUpdateRequest was null or undefined when calling bundleIdsUpdateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdUpdateRequestToJSON(requestParameters.bundleIdUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdsUpdateInstance(requestParameters: BundleIdsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BundleIdsAppGetToOneRelatedFieldsAppsEnum = {
    AppAvailability: 'appAvailability',
    AppClips: 'appClips',
    AppCustomProductPages: 'appCustomProductPages',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    AppEvents: 'appEvents',
    AppInfos: 'appInfos',
    AppPricePoints: 'appPricePoints',
    AppPriceSchedule: 'appPriceSchedule',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AppStoreVersions: 'appStoreVersions',
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    BetaAppLocalizations: 'betaAppLocalizations',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    BetaGroups: 'betaGroups',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    BundleId: 'bundleId',
    CiProduct: 'ciProduct',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    CustomerReviews: 'customerReviews',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    GameCenterDetail: 'gameCenterDetail',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    InAppPurchases: 'inAppPurchases',
    InAppPurchasesV2: 'inAppPurchasesV2',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    Name: 'name',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreOrder: 'preOrder',
    PreReleaseVersions: 'preReleaseVersions',
    PricePoints: 'pricePoints',
    Prices: 'prices',
    PrimaryLocale: 'primaryLocale',
    PromotedPurchases: 'promotedPurchases',
    ReviewSubmissions: 'reviewSubmissions',
    Sku: 'sku',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    SubscriptionGroups: 'subscriptionGroups',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox'
} as const;
export type BundleIdsAppGetToOneRelatedFieldsAppsEnum = typeof BundleIdsAppGetToOneRelatedFieldsAppsEnum[keyof typeof BundleIdsAppGetToOneRelatedFieldsAppsEnum];
/**
 * @export
 */
export const BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum = {
    BundleId: 'bundleId',
    CapabilityType: 'capabilityType',
    Settings: 'settings'
} as const;
export type BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum = typeof BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum[keyof typeof BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionFilterPlatformEnum = {
    Ios: 'IOS',
    MacOs: 'MAC_OS'
} as const;
export type BundleIdsGetCollectionFilterPlatformEnum = typeof BundleIdsGetCollectionFilterPlatformEnum[keyof typeof BundleIdsGetCollectionFilterPlatformEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionSortEnum = {
    Id: 'id',
    Id: '-id',
    Identifier: 'identifier',
    Identifier: '-identifier',
    Name: 'name',
    Name: '-name',
    Platform: 'platform',
    Platform: '-platform',
    SeedId: 'seedId',
    SeedId: '-seedId'
} as const;
export type BundleIdsGetCollectionSortEnum = typeof BundleIdsGetCollectionSortEnum[keyof typeof BundleIdsGetCollectionSortEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionFieldsBundleIdsEnum = {
    App: 'app',
    BundleIdCapabilities: 'bundleIdCapabilities',
    Identifier: 'identifier',
    Name: 'name',
    Platform: 'platform',
    Profiles: 'profiles',
    SeedId: 'seedId'
} as const;
export type BundleIdsGetCollectionFieldsBundleIdsEnum = typeof BundleIdsGetCollectionFieldsBundleIdsEnum[keyof typeof BundleIdsGetCollectionFieldsBundleIdsEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionIncludeEnum = {
    App: 'app',
    BundleIdCapabilities: 'bundleIdCapabilities',
    Profiles: 'profiles'
} as const;
export type BundleIdsGetCollectionIncludeEnum = typeof BundleIdsGetCollectionIncludeEnum[keyof typeof BundleIdsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum = {
    BundleId: 'bundleId',
    CapabilityType: 'capabilityType',
    Settings: 'settings'
} as const;
export type BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum = typeof BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum[keyof typeof BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionFieldsProfilesEnum = {
    BundleId: 'bundleId',
    Certificates: 'certificates',
    CreatedDate: 'createdDate',
    Devices: 'devices',
    ExpirationDate: 'expirationDate',
    Name: 'name',
    Platform: 'platform',
    ProfileContent: 'profileContent',
    ProfileState: 'profileState',
    ProfileType: 'profileType',
    Uuid: 'uuid'
} as const;
export type BundleIdsGetCollectionFieldsProfilesEnum = typeof BundleIdsGetCollectionFieldsProfilesEnum[keyof typeof BundleIdsGetCollectionFieldsProfilesEnum];
/**
 * @export
 */
export const BundleIdsGetCollectionFieldsAppsEnum = {
    AppAvailability: 'appAvailability',
    AppClips: 'appClips',
    AppCustomProductPages: 'appCustomProductPages',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    AppEvents: 'appEvents',
    AppInfos: 'appInfos',
    AppPricePoints: 'appPricePoints',
    AppPriceSchedule: 'appPriceSchedule',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AppStoreVersions: 'appStoreVersions',
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    BetaAppLocalizations: 'betaAppLocalizations',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    BetaGroups: 'betaGroups',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    BundleId: 'bundleId',
    CiProduct: 'ciProduct',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    CustomerReviews: 'customerReviews',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    GameCenterDetail: 'gameCenterDetail',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    InAppPurchases: 'inAppPurchases',
    InAppPurchasesV2: 'inAppPurchasesV2',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    Name: 'name',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreOrder: 'preOrder',
    PreReleaseVersions: 'preReleaseVersions',
    PricePoints: 'pricePoints',
    Prices: 'prices',
    PrimaryLocale: 'primaryLocale',
    PromotedPurchases: 'promotedPurchases',
    ReviewSubmissions: 'reviewSubmissions',
    Sku: 'sku',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    SubscriptionGroups: 'subscriptionGroups',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox'
} as const;
export type BundleIdsGetCollectionFieldsAppsEnum = typeof BundleIdsGetCollectionFieldsAppsEnum[keyof typeof BundleIdsGetCollectionFieldsAppsEnum];
/**
 * @export
 */
export const BundleIdsGetInstanceFieldsBundleIdsEnum = {
    App: 'app',
    BundleIdCapabilities: 'bundleIdCapabilities',
    Identifier: 'identifier',
    Name: 'name',
    Platform: 'platform',
    Profiles: 'profiles',
    SeedId: 'seedId'
} as const;
export type BundleIdsGetInstanceFieldsBundleIdsEnum = typeof BundleIdsGetInstanceFieldsBundleIdsEnum[keyof typeof BundleIdsGetInstanceFieldsBundleIdsEnum];
/**
 * @export
 */
export const BundleIdsGetInstanceIncludeEnum = {
    App: 'app',
    BundleIdCapabilities: 'bundleIdCapabilities',
    Profiles: 'profiles'
} as const;
export type BundleIdsGetInstanceIncludeEnum = typeof BundleIdsGetInstanceIncludeEnum[keyof typeof BundleIdsGetInstanceIncludeEnum];
/**
 * @export
 */
export const BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum = {
    BundleId: 'bundleId',
    CapabilityType: 'capabilityType',
    Settings: 'settings'
} as const;
export type BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum = typeof BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum[keyof typeof BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum];
/**
 * @export
 */
export const BundleIdsGetInstanceFieldsProfilesEnum = {
    BundleId: 'bundleId',
    Certificates: 'certificates',
    CreatedDate: 'createdDate',
    Devices: 'devices',
    ExpirationDate: 'expirationDate',
    Name: 'name',
    Platform: 'platform',
    ProfileContent: 'profileContent',
    ProfileState: 'profileState',
    ProfileType: 'profileType',
    Uuid: 'uuid'
} as const;
export type BundleIdsGetInstanceFieldsProfilesEnum = typeof BundleIdsGetInstanceFieldsProfilesEnum[keyof typeof BundleIdsGetInstanceFieldsProfilesEnum];
/**
 * @export
 */
export const BundleIdsGetInstanceFieldsAppsEnum = {
    AppAvailability: 'appAvailability',
    AppClips: 'appClips',
    AppCustomProductPages: 'appCustomProductPages',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    AppEvents: 'appEvents',
    AppInfos: 'appInfos',
    AppPricePoints: 'appPricePoints',
    AppPriceSchedule: 'appPriceSchedule',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AppStoreVersions: 'appStoreVersions',
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    BetaAppLocalizations: 'betaAppLocalizations',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    BetaGroups: 'betaGroups',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    BundleId: 'bundleId',
    CiProduct: 'ciProduct',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    CustomerReviews: 'customerReviews',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    GameCenterDetail: 'gameCenterDetail',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    InAppPurchases: 'inAppPurchases',
    InAppPurchasesV2: 'inAppPurchasesV2',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    Name: 'name',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreOrder: 'preOrder',
    PreReleaseVersions: 'preReleaseVersions',
    PricePoints: 'pricePoints',
    Prices: 'prices',
    PrimaryLocale: 'primaryLocale',
    PromotedPurchases: 'promotedPurchases',
    ReviewSubmissions: 'reviewSubmissions',
    Sku: 'sku',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    SubscriptionGroups: 'subscriptionGroups',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox'
} as const;
export type BundleIdsGetInstanceFieldsAppsEnum = typeof BundleIdsGetInstanceFieldsAppsEnum[keyof typeof BundleIdsGetInstanceFieldsAppsEnum];
/**
 * @export
 */
export const BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum = {
    BundleId: 'bundleId',
    Certificates: 'certificates',
    CreatedDate: 'createdDate',
    Devices: 'devices',
    ExpirationDate: 'expirationDate',
    Name: 'name',
    Platform: 'platform',
    ProfileContent: 'profileContent',
    ProfileState: 'profileState',
    ProfileType: 'profileType',
    Uuid: 'uuid'
} as const;
export type BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum = typeof BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum[keyof typeof BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum];
