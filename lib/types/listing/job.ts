//not used
import type { BaseListing } from "./base";

export type JobListing = BaseListing & {
  listingType: "jobs";

  attributes: {
    employmentType: string;
    salaryMin?: number;
    salaryMax?: number;
    experienceYears?: number;
  };
};