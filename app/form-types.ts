export type VerifiedForm={
 id:string;versionId:string;label:string;language:string;itemCount:number;
 sourceUrl:string;sourceSha256:string;scoringSource:string;rightsSource:string;
 instructions:string;options:{label:string;value:number;printedCode?:number}[];
 scoringNote?:string;
 items:{number:number;text:string;dimension:string;originalItem:number;sourcePage:number;reverse:boolean}[];
 dimensions:Record<string,number[]>;rawSubscaleRange:number[];comparisonMultiplier:number;
 review:{text:string;scoring:string;translationValidation:string};
 respondentScoringEnabled:boolean;verifiedAt:string;translationEvidence:string;usage:string;exportReady:boolean;
 supplementaryItems?:{text:string;options:string[];scored:false}[];
 exportBlockReason?:string;
 studyEvidence?:{label:string;url:string;status:'题文已匹配'|'译本来源已关联'|'尚未确认';note:string}[];
 audit?:{date:string;source:string;items:string;scoring:string;rights:string;layout:string};
};
