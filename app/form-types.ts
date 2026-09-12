export type VerifiedForm={
 id:string;versionId:string;label:string;language:string;itemCount:number;
 sourceUrl:string;sourceSha256:string;scoringSource:string;rightsSource:string;
 instructions:string;options:{label:string;value:number}[];
 items:{number:number;text:string;dimension:string;originalItem:number;sourcePage:number;reverse:boolean}[];
 dimensions:Record<string,number[]>;rawSubscaleRange:number[];comparisonMultiplier:number;
 review:{text:string;scoring:string;translationValidation:string};
 respondentScoringEnabled:boolean;verifiedAt:string;translationEvidence:string;usage:string;exportReady:boolean;
};
