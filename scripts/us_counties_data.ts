export interface CountySeedItem {
  name: string;
  code: string | null; // Mã định danh hoặc để trống nếu không có code riêng
  regionCode: string; // Mã tiểu bang tương ứng trong usStates_Region (VD: 'CA', 'TX')
  hasWard: boolean; // US counties thường quản lý theo City/Town/Township thay vì ward trực thuộc, để false hoặc true tùy logic nghiệp vụ
}

export const rawUSCountiesSeed: CountySeedItem[] = [
  {
    "name": "Autauga County",
    "code": "01001",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Baldwin County",
    "code": "01003",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Barbour County",
    "code": "01005",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Bibb County",
    "code": "01007",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Blount County",
    "code": "01009",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Bullock County",
    "code": "01011",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "01013",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "01015",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Chambers County",
    "code": "01017",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "01019",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Chilton County",
    "code": "01021",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Choctaw County",
    "code": "01023",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Clarke County",
    "code": "01025",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "01027",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Cleburne County",
    "code": "01029",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Coffee County",
    "code": "01031",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Colbert County",
    "code": "01033",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Conecuh County",
    "code": "01035",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Coosa County",
    "code": "01037",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Covington County",
    "code": "01039",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Crenshaw County",
    "code": "01041",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Cullman County",
    "code": "01043",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Dale County",
    "code": "01045",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Dallas County",
    "code": "01047",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "01049",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Elmore County",
    "code": "01051",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Escambia County",
    "code": "01053",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Etowah County",
    "code": "01055",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "01057",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "01059",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Geneva County",
    "code": "01061",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "01063",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Hale County",
    "code": "01065",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "01067",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Houston County",
    "code": "01069",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "01071",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "01073",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Lamar County",
    "code": "01075",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Lauderdale County",
    "code": "01077",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "01079",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "01081",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Limestone County",
    "code": "01083",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Lowndes County",
    "code": "01085",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "01087",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "01089",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Marengo County",
    "code": "01091",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "01093",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "01095",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Mobile County",
    "code": "01097",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "01099",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "01101",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "01103",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "01105",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Pickens County",
    "code": "01107",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "01109",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "01111",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Russell County",
    "code": "01113",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "St. Clair County",
    "code": "01115",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "01117",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Sumter County",
    "code": "01119",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Talladega County",
    "code": "01121",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Tallapoosa County",
    "code": "01123",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Tuscaloosa County",
    "code": "01125",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Walker County",
    "code": "01127",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "01129",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Wilcox County",
    "code": "01131",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Winston County",
    "code": "01133",
    "regionCode": "AL",
    "hasWard": false
  },
  {
    "name": "Aleutians East Borough",
    "code": "02013",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Aleutians West Census Area",
    "code": "02016",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Anchorage Municipality",
    "code": "02020",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Bethel Census Area",
    "code": "02050",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Bristol Bay Borough",
    "code": "02060",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Denali Borough",
    "code": "02068",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Dillingham Census Area",
    "code": "02070",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Fairbanks North Star Borough",
    "code": "02090",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Haines Borough",
    "code": "02100",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Hoonah-Angoon Census Area",
    "code": "02105",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Juneau City and Borough",
    "code": "02110",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Kenai Peninsula Borough",
    "code": "02122",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Ketchikan Gateway Borough",
    "code": "02130",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Kodiak Island Borough",
    "code": "02150",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Lake and Peninsula Borough",
    "code": "02164",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Matanuska-Susitna Borough",
    "code": "02170",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Nome Census Area",
    "code": "02180",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "North Slope Borough",
    "code": "02185",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Northwest Arctic Borough",
    "code": "02188",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Petersburg Borough",
    "code": "02195",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Prince of Wales-Hyder Census Area",
    "code": "02198",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Sitka City and Borough",
    "code": "02220",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Skagway Municipality",
    "code": "02230",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Southeast Fairbanks Census Area",
    "code": "02240",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Valdez-Cordova Census Area",
    "code": "02261",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Wade Hampton Census Area",
    "code": "02270",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Wrangell City and Borough",
    "code": "02275",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Yakutat City and Borough",
    "code": "02282",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Yukon-Koyukuk Census Area",
    "code": "02290",
    "regionCode": "AK",
    "hasWard": false
  },
  {
    "name": "Apache County",
    "code": "04001",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Cochise County",
    "code": "04003",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Coconino County",
    "code": "04005",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Gila County",
    "code": "04007",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Graham County",
    "code": "04009",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Greenlee County",
    "code": "04011",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "La Paz County",
    "code": "04012",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Maricopa County",
    "code": "04013",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Mohave County",
    "code": "04015",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Navajo County",
    "code": "04017",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Pima County",
    "code": "04019",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Pinal County",
    "code": "04021",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Santa Cruz County",
    "code": "04023",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Yavapai County",
    "code": "04025",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Yuma County",
    "code": "04027",
    "regionCode": "AZ",
    "hasWard": false
  },
  {
    "name": "Arkansas County",
    "code": "05001",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Ashley County",
    "code": "05003",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Baxter County",
    "code": "05005",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "05007",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "05009",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Bradley County",
    "code": "05011",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "05013",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "05015",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Chicot County",
    "code": "05017",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "05019",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "05021",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Cleburne County",
    "code": "05023",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Cleveland County",
    "code": "05025",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "05027",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Conway County",
    "code": "05029",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Craighead County",
    "code": "05031",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "05033",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Crittenden County",
    "code": "05035",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Cross County",
    "code": "05037",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Dallas County",
    "code": "05039",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Desha County",
    "code": "05041",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Drew County",
    "code": "05043",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Faulkner County",
    "code": "05045",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "05047",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "05049",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Garland County",
    "code": "05051",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "05053",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "05055",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Hempstead County",
    "code": "05057",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Hot Spring County",
    "code": "05059",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "05061",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Independence County",
    "code": "05063",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Izard County",
    "code": "05065",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "05067",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "05069",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "05071",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Lafayette County",
    "code": "05073",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "05075",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "05077",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "05079",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Little River County",
    "code": "05081",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "05083",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Lonoke County",
    "code": "05085",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "05087",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "05089",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Miller County",
    "code": "05091",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Mississippi County",
    "code": "05093",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "05095",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "05097",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Nevada County",
    "code": "05099",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "05101",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Ouachita County",
    "code": "05103",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "05105",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Phillips County",
    "code": "05107",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "05109",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Poinsett County",
    "code": "05111",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "05113",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Pope County",
    "code": "05115",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Prairie County",
    "code": "05117",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "05119",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "05121",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "St. Francis County",
    "code": "05123",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Saline County",
    "code": "05125",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "05127",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Searcy County",
    "code": "05129",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Sebastian County",
    "code": "05131",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Sevier County",
    "code": "05133",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Sharp County",
    "code": "05135",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Stone County",
    "code": "05137",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "05139",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Van Buren County",
    "code": "05141",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "05143",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "White County",
    "code": "05145",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Woodruff County",
    "code": "05147",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Yell County",
    "code": "05149",
    "regionCode": "AR",
    "hasWard": false
  },
  {
    "name": "Alameda County",
    "code": "06001",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Alpine County",
    "code": "06003",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Amador County",
    "code": "06005",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Butte County",
    "code": "06007",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Calaveras County",
    "code": "06009",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Colusa County",
    "code": "06011",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Contra Costa County",
    "code": "06013",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Del Norte County",
    "code": "06015",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "El Dorado County",
    "code": "06017",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Fresno County",
    "code": "06019",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Glenn County",
    "code": "06021",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Humboldt County",
    "code": "06023",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Imperial County",
    "code": "06025",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Inyo County",
    "code": "06027",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Kern County",
    "code": "06029",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Kings County",
    "code": "06031",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "06033",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Lassen County",
    "code": "06035",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Los Angeles County",
    "code": "06037",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Madera County",
    "code": "06039",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Marin County",
    "code": "06041",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Mariposa County",
    "code": "06043",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Mendocino County",
    "code": "06045",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Merced County",
    "code": "06047",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Modoc County",
    "code": "06049",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Mono County",
    "code": "06051",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Monterey County",
    "code": "06053",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Napa County",
    "code": "06055",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Nevada County",
    "code": "06057",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "06059",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Placer County",
    "code": "06061",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Plumas County",
    "code": "06063",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Riverside County",
    "code": "06065",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Sacramento County",
    "code": "06067",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Benito County",
    "code": "06069",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Bernardino County",
    "code": "06071",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Diego County",
    "code": "06073",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Francisco County",
    "code": "06075",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Joaquin County",
    "code": "06077",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Luis Obispo County",
    "code": "06079",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "San Mateo County",
    "code": "06081",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Santa Barbara County",
    "code": "06083",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Santa Clara County",
    "code": "06085",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Santa Cruz County",
    "code": "06087",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Shasta County",
    "code": "06089",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Sierra County",
    "code": "06091",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Siskiyou County",
    "code": "06093",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Solano County",
    "code": "06095",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Sonoma County",
    "code": "06097",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Stanislaus County",
    "code": "06099",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Sutter County",
    "code": "06101",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Tehama County",
    "code": "06103",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Trinity County",
    "code": "06105",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Tulare County",
    "code": "06107",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Tuolumne County",
    "code": "06109",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Ventura County",
    "code": "06111",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Yolo County",
    "code": "06113",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Yuba County",
    "code": "06115",
    "regionCode": "CA",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "08001",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Alamosa County",
    "code": "08003",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Arapahoe County",
    "code": "08005",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Archuleta County",
    "code": "08007",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Baca County",
    "code": "08009",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Bent County",
    "code": "08011",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Boulder County",
    "code": "08013",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Broomfield County",
    "code": "08014",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Chaffee County",
    "code": "08015",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Cheyenne County",
    "code": "08017",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Clear Creek County",
    "code": "08019",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Conejos County",
    "code": "08021",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Costilla County",
    "code": "08023",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Crowley County",
    "code": "08025",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "08027",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Delta County",
    "code": "08029",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Denver County",
    "code": "08031",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Dolores County",
    "code": "08033",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "08035",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Eagle County",
    "code": "08037",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Elbert County",
    "code": "08039",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "El Paso County",
    "code": "08041",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Fremont County",
    "code": "08043",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "08045",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Gilpin County",
    "code": "08047",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Grand County",
    "code": "08049",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Gunnison County",
    "code": "08051",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Hinsdale County",
    "code": "08053",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Huerfano County",
    "code": "08055",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "08057",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "08059",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Kiowa County",
    "code": "08061",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Kit Carson County",
    "code": "08063",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "08065",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "La Plata County",
    "code": "08067",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Larimer County",
    "code": "08069",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Las Animas County",
    "code": "08071",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "08073",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "08075",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Mesa County",
    "code": "08077",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Mineral County",
    "code": "08079",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Moffat County",
    "code": "08081",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Montezuma County",
    "code": "08083",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Montrose County",
    "code": "08085",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "08087",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Otero County",
    "code": "08089",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Ouray County",
    "code": "08091",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Park County",
    "code": "08093",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Phillips County",
    "code": "08095",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Pitkin County",
    "code": "08097",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Prowers County",
    "code": "08099",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Pueblo County",
    "code": "08101",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Rio Blanco County",
    "code": "08103",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Rio Grande County",
    "code": "08105",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Routt County",
    "code": "08107",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Saguache County",
    "code": "08109",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "San Juan County",
    "code": "08111",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "San Miguel County",
    "code": "08113",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Sedgwick County",
    "code": "08115",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Summit County",
    "code": "08117",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Teller County",
    "code": "08119",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "08121",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Weld County",
    "code": "08123",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Yuma County",
    "code": "08125",
    "regionCode": "CO",
    "hasWard": false
  },
  {
    "name": "Fairfield County",
    "code": "09001",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Hartford County",
    "code": "09003",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Litchfield County",
    "code": "09005",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Middlesex County",
    "code": "09007",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "New Haven County",
    "code": "09009",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "New London County",
    "code": "09011",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Tolland County",
    "code": "09013",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Windham County",
    "code": "09015",
    "regionCode": "CT",
    "hasWard": false
  },
  {
    "name": "Kent County",
    "code": "10001",
    "regionCode": "DE",
    "hasWard": false
  },
  {
    "name": "New Castle County",
    "code": "10003",
    "regionCode": "DE",
    "hasWard": false
  },
  {
    "name": "Sussex County",
    "code": "10005",
    "regionCode": "DE",
    "hasWard": false
  },
  {
    "name": "District of Columbia",
    "code": "11001",
    "regionCode": "DC",
    "hasWard": false
  },
  {
    "name": "Alachua County",
    "code": "12001",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Baker County",
    "code": "12003",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Bay County",
    "code": "12005",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Bradford County",
    "code": "12007",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Brevard County",
    "code": "12009",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Broward County",
    "code": "12011",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "12013",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Charlotte County",
    "code": "12015",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Citrus County",
    "code": "12017",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "12019",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Collier County",
    "code": "12021",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "12023",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "DeSoto County",
    "code": "12027",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Dixie County",
    "code": "12029",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Duval County",
    "code": "12031",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Escambia County",
    "code": "12033",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Flagler County",
    "code": "12035",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "12037",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Gadsden County",
    "code": "12039",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Gilchrist County",
    "code": "12041",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Glades County",
    "code": "12043",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Gulf County",
    "code": "12045",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "12047",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Hardee County",
    "code": "12049",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Hendry County",
    "code": "12051",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Hernando County",
    "code": "12053",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Highlands County",
    "code": "12055",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Hillsborough County",
    "code": "12057",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Holmes County",
    "code": "12059",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Indian River County",
    "code": "12061",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "12063",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "12065",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Lafayette County",
    "code": "12067",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "12069",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "12071",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Leon County",
    "code": "12073",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Levy County",
    "code": "12075",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Liberty County",
    "code": "12077",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "12079",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Manatee County",
    "code": "12081",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "12083",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "12085",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Miami-Dade County",
    "code": "12086",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "12087",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Nassau County",
    "code": "12089",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Okaloosa County",
    "code": "12091",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Okeechobee County",
    "code": "12093",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "12095",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Osceola County",
    "code": "12097",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Palm Beach County",
    "code": "12099",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Pasco County",
    "code": "12101",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Pinellas County",
    "code": "12103",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "12105",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "12107",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "St. Johns County",
    "code": "12109",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "St. Lucie County",
    "code": "12111",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Santa Rosa County",
    "code": "12113",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Sarasota County",
    "code": "12115",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Seminole County",
    "code": "12117",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Sumter County",
    "code": "12119",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Suwannee County",
    "code": "12121",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "12123",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "12125",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Volusia County",
    "code": "12127",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Wakulla County",
    "code": "12129",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Walton County",
    "code": "12131",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "12133",
    "regionCode": "FL",
    "hasWard": false
  },
  {
    "name": "Appling County",
    "code": "13001",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Atkinson County",
    "code": "13003",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bacon County",
    "code": "13005",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Baker County",
    "code": "13007",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Baldwin County",
    "code": "13009",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Banks County",
    "code": "13011",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Barrow County",
    "code": "13013",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bartow County",
    "code": "13015",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Ben Hill County",
    "code": "13017",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Berrien County",
    "code": "13019",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bibb County",
    "code": "13021",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bleckley County",
    "code": "13023",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Brantley County",
    "code": "13025",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Brooks County",
    "code": "13027",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bryan County",
    "code": "13029",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Bulloch County",
    "code": "13031",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Burke County",
    "code": "13033",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Butts County",
    "code": "13035",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "13037",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Camden County",
    "code": "13039",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Candler County",
    "code": "13043",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "13045",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Catoosa County",
    "code": "13047",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Charlton County",
    "code": "13049",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Chatham County",
    "code": "13051",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Chattahoochee County",
    "code": "13053",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Chattooga County",
    "code": "13055",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "13057",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Clarke County",
    "code": "13059",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "13061",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Clayton County",
    "code": "13063",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Clinch County",
    "code": "13065",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Cobb County",
    "code": "13067",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Coffee County",
    "code": "13069",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Colquitt County",
    "code": "13071",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "13073",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Cook County",
    "code": "13075",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Coweta County",
    "code": "13077",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "13079",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Crisp County",
    "code": "13081",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Dade County",
    "code": "13083",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Dawson County",
    "code": "13085",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Decatur County",
    "code": "13087",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "13089",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Dodge County",
    "code": "13091",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Dooly County",
    "code": "13093",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Dougherty County",
    "code": "13095",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "13097",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Early County",
    "code": "13099",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Echols County",
    "code": "13101",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Effingham County",
    "code": "13103",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Elbert County",
    "code": "13105",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Emanuel County",
    "code": "13107",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Evans County",
    "code": "13109",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Fannin County",
    "code": "13111",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "13113",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "13115",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Forsyth County",
    "code": "13117",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "13119",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "13121",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Gilmer County",
    "code": "13123",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Glascock County",
    "code": "13125",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Glynn County",
    "code": "13127",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Gordon County",
    "code": "13129",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Grady County",
    "code": "13131",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "13133",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Gwinnett County",
    "code": "13135",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Habersham County",
    "code": "13137",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Hall County",
    "code": "13139",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "13141",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Haralson County",
    "code": "13143",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Harris County",
    "code": "13145",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Hart County",
    "code": "13147",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Heard County",
    "code": "13149",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "13151",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Houston County",
    "code": "13153",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Irwin County",
    "code": "13155",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "13157",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "13159",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jeff Davis County",
    "code": "13161",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "13163",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jenkins County",
    "code": "13165",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "13167",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "13169",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lamar County",
    "code": "13171",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lanier County",
    "code": "13173",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Laurens County",
    "code": "13175",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "13177",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Liberty County",
    "code": "13179",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "13181",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Long County",
    "code": "13183",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lowndes County",
    "code": "13185",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Lumpkin County",
    "code": "13187",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "McDuffie County",
    "code": "13189",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "McIntosh County",
    "code": "13191",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "13193",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "13195",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "13197",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Meriwether County",
    "code": "13199",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Miller County",
    "code": "13201",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Mitchell County",
    "code": "13205",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "13207",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "13209",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "13211",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Murray County",
    "code": "13213",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Muscogee County",
    "code": "13215",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "13217",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Oconee County",
    "code": "13219",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Oglethorpe County",
    "code": "13221",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Paulding County",
    "code": "13223",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Peach County",
    "code": "13225",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Pickens County",
    "code": "13227",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Pierce County",
    "code": "13229",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "13231",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "13233",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "13235",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "13237",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Quitman County",
    "code": "13239",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Rabun County",
    "code": "13241",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "13243",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Richmond County",
    "code": "13245",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Rockdale County",
    "code": "13247",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Schley County",
    "code": "13249",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Screven County",
    "code": "13251",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Seminole County",
    "code": "13253",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Spalding County",
    "code": "13255",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Stephens County",
    "code": "13257",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Stewart County",
    "code": "13259",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Sumter County",
    "code": "13261",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Talbot County",
    "code": "13263",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Taliaferro County",
    "code": "13265",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Tattnall County",
    "code": "13267",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "13269",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Telfair County",
    "code": "13271",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Terrell County",
    "code": "13273",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Thomas County",
    "code": "13275",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Tift County",
    "code": "13277",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Toombs County",
    "code": "13279",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Towns County",
    "code": "13281",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Treutlen County",
    "code": "13283",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Troup County",
    "code": "13285",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Turner County",
    "code": "13287",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Twiggs County",
    "code": "13289",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "13291",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Upson County",
    "code": "13293",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Walker County",
    "code": "13295",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Walton County",
    "code": "13297",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Ware County",
    "code": "13299",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "13301",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "13303",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "13305",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "13307",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Wheeler County",
    "code": "13309",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "White County",
    "code": "13311",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Whitfield County",
    "code": "13313",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Wilcox County",
    "code": "13315",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Wilkes County",
    "code": "13317",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Wilkinson County",
    "code": "13319",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Worth County",
    "code": "13321",
    "regionCode": "GA",
    "hasWard": false
  },
  {
    "name": "Hawaii County",
    "code": "15001",
    "regionCode": "HI",
    "hasWard": false
  },
  {
    "name": "Honolulu County",
    "code": "15003",
    "regionCode": "HI",
    "hasWard": false
  },
  {
    "name": "Kalawao County",
    "code": "15005",
    "regionCode": "HI",
    "hasWard": false
  },
  {
    "name": "Kauai County",
    "code": "15007",
    "regionCode": "HI",
    "hasWard": false
  },
  {
    "name": "Maui County",
    "code": "15009",
    "regionCode": "HI",
    "hasWard": false
  },
  {
    "name": "Ada County",
    "code": "16001",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "16003",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Bannock County",
    "code": "16005",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Bear Lake County",
    "code": "16007",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Benewah County",
    "code": "16009",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Bingham County",
    "code": "16011",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Blaine County",
    "code": "16013",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Boise County",
    "code": "16015",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Bonner County",
    "code": "16017",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Bonneville County",
    "code": "16019",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Boundary County",
    "code": "16021",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Butte County",
    "code": "16023",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Camas County",
    "code": "16025",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Canyon County",
    "code": "16027",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Caribou County",
    "code": "16029",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Cassia County",
    "code": "16031",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "16033",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Clearwater County",
    "code": "16035",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "16037",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Elmore County",
    "code": "16039",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "16041",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Fremont County",
    "code": "16043",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Gem County",
    "code": "16045",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Gooding County",
    "code": "16047",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Idaho County",
    "code": "16049",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "16051",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Jerome County",
    "code": "16053",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Kootenai County",
    "code": "16055",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Latah County",
    "code": "16057",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Lemhi County",
    "code": "16059",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "16061",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "16063",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "16065",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Minidoka County",
    "code": "16067",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Nez Perce County",
    "code": "16069",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Oneida County",
    "code": "16071",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Owyhee County",
    "code": "16073",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Payette County",
    "code": "16075",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Power County",
    "code": "16077",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Shoshone County",
    "code": "16079",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Teton County",
    "code": "16081",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Twin Falls County",
    "code": "16083",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Valley County",
    "code": "16085",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "16087",
    "regionCode": "ID",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "17001",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Alexander County",
    "code": "17003",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Bond County",
    "code": "17005",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "17007",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "17009",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Bureau County",
    "code": "17011",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "17013",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "17015",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "17017",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Champaign County",
    "code": "17019",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Christian County",
    "code": "17021",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "17023",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "17025",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "17027",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Coles County",
    "code": "17029",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Cook County",
    "code": "17031",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "17033",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "17035",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "17037",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "De Witt County",
    "code": "17039",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "17041",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "DuPage County",
    "code": "17043",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Edgar County",
    "code": "17045",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Edwards County",
    "code": "17047",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Effingham County",
    "code": "17049",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "17051",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Ford County",
    "code": "17053",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "17055",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "17057",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Gallatin County",
    "code": "17059",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "17061",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Grundy County",
    "code": "17063",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "17065",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "17067",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "17069",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Henderson County",
    "code": "17071",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "17073",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Iroquois County",
    "code": "17075",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "17077",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "17079",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "17081",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Jersey County",
    "code": "17083",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Jo Daviess County",
    "code": "17085",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "17087",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Kane County",
    "code": "17089",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Kankakee County",
    "code": "17091",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Kendall County",
    "code": "17093",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "17095",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "17097",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "LaSalle County",
    "code": "17099",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "17101",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "17103",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Livingston County",
    "code": "17105",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "17107",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "McDonough County",
    "code": "17109",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "McHenry County",
    "code": "17111",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "McLean County",
    "code": "17113",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "17115",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Macoupin County",
    "code": "17117",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "17119",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "17121",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "17123",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "17125",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Massac County",
    "code": "17127",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Menard County",
    "code": "17129",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "17131",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "17133",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "17135",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "17137",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Moultrie County",
    "code": "17139",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Ogle County",
    "code": "17141",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Peoria County",
    "code": "17143",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "17145",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Piatt County",
    "code": "17147",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "17149",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Pope County",
    "code": "17151",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "17153",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "17155",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "17157",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "17159",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Rock Island County",
    "code": "17161",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "St. Clair County",
    "code": "17163",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Saline County",
    "code": "17165",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Sangamon County",
    "code": "17167",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Schuyler County",
    "code": "17169",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "17171",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "17173",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Stark County",
    "code": "17175",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Stephenson County",
    "code": "17177",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Tazewell County",
    "code": "17179",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "17181",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Vermilion County",
    "code": "17183",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Wabash County",
    "code": "17185",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "17187",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "17189",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "17191",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "White County",
    "code": "17193",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Whiteside County",
    "code": "17195",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Will County",
    "code": "17197",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Williamson County",
    "code": "17199",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Winnebago County",
    "code": "17201",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Woodford County",
    "code": "17203",
    "regionCode": "IL",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "18001",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Allen County",
    "code": "18003",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Bartholomew County",
    "code": "18005",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "18007",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Blackford County",
    "code": "18009",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "18011",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "18013",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "18015",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "18017",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "18019",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "18021",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "18023",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "18025",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Daviess County",
    "code": "18027",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Dearborn County",
    "code": "18029",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Decatur County",
    "code": "18031",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "18033",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "18035",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Dubois County",
    "code": "18037",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Elkhart County",
    "code": "18039",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "18041",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "18043",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Fountain County",
    "code": "18045",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "18047",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "18049",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Gibson County",
    "code": "18051",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "18053",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "18055",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "18057",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "18059",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "18061",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Hendricks County",
    "code": "18063",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "18065",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "18067",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Huntington County",
    "code": "18069",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "18071",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "18073",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Jay County",
    "code": "18075",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "18077",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Jennings County",
    "code": "18079",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "18081",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "18083",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Kosciusko County",
    "code": "18085",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "LaGrange County",
    "code": "18087",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "18089",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "LaPorte County",
    "code": "18091",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "18093",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "18095",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "18097",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "18099",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "18101",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Miami County",
    "code": "18103",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "18105",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "18107",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "18109",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "18111",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Noble County",
    "code": "18113",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Ohio County",
    "code": "18115",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "18117",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Owen County",
    "code": "18119",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Parke County",
    "code": "18121",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "18123",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "18125",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Porter County",
    "code": "18127",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Posey County",
    "code": "18129",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "18131",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "18133",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "18135",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Ripley County",
    "code": "18137",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Rush County",
    "code": "18139",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "St. Joseph County",
    "code": "18141",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "18143",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "18145",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Spencer County",
    "code": "18147",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Starke County",
    "code": "18149",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Steuben County",
    "code": "18151",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "18153",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Switzerland County",
    "code": "18155",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Tippecanoe County",
    "code": "18157",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Tipton County",
    "code": "18159",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "18161",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Vanderburgh County",
    "code": "18163",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Vermillion County",
    "code": "18165",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Vigo County",
    "code": "18167",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Wabash County",
    "code": "18169",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "18171",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Warrick County",
    "code": "18173",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "18175",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "18177",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Wells County",
    "code": "18179",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "White County",
    "code": "18181",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Whitley County",
    "code": "18183",
    "regionCode": "IN",
    "hasWard": false
  },
  {
    "name": "Adair County",
    "code": "19001",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "19003",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Allamakee County",
    "code": "19005",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Appanoose County",
    "code": "19007",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Audubon County",
    "code": "19009",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "19011",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Black Hawk County",
    "code": "19013",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "19015",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Bremer County",
    "code": "19017",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Buchanan County",
    "code": "19019",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Buena Vista County",
    "code": "19021",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "19023",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "19025",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "19027",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "19029",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Cedar County",
    "code": "19031",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Cerro Gordo County",
    "code": "19033",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "19035",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Chickasaw County",
    "code": "19037",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Clarke County",
    "code": "19039",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "19041",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Clayton County",
    "code": "19043",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "19045",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "19047",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Dallas County",
    "code": "19049",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Davis County",
    "code": "19051",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Decatur County",
    "code": "19053",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "19055",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Des Moines County",
    "code": "19057",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Dickinson County",
    "code": "19059",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Dubuque County",
    "code": "19061",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Emmet County",
    "code": "19063",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "19065",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "19067",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "19069",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Fremont County",
    "code": "19071",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "19073",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Grundy County",
    "code": "19075",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Guthrie County",
    "code": "19077",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "19079",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "19081",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "19083",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "19085",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "19087",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "19089",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Humboldt County",
    "code": "19091",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Ida County",
    "code": "19093",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Iowa County",
    "code": "19095",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "19097",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "19099",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "19101",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "19103",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "19105",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Keokuk County",
    "code": "19107",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Kossuth County",
    "code": "19109",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "19111",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Linn County",
    "code": "19113",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Louisa County",
    "code": "19115",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Lucas County",
    "code": "19117",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Lyon County",
    "code": "19119",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "19121",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Mahaska County",
    "code": "19123",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "19125",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "19127",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Mills County",
    "code": "19129",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Mitchell County",
    "code": "19131",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Monona County",
    "code": "19133",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "19135",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "19137",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Muscatine County",
    "code": "19139",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "O'Brien County",
    "code": "19141",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Osceola County",
    "code": "19143",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Page County",
    "code": "19145",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Palo Alto County",
    "code": "19147",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Plymouth County",
    "code": "19149",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Pocahontas County",
    "code": "19151",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "19153",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Pottawattamie County",
    "code": "19155",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Poweshiek County",
    "code": "19157",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Ringgold County",
    "code": "19159",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Sac County",
    "code": "19161",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "19163",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "19165",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Sioux County",
    "code": "19167",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Story County",
    "code": "19169",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Tama County",
    "code": "19171",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "19173",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "19175",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Van Buren County",
    "code": "19177",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Wapello County",
    "code": "19179",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "19181",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "19183",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "19185",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "19187",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Winnebago County",
    "code": "19189",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Winneshiek County",
    "code": "19191",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Woodbury County",
    "code": "19193",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Worth County",
    "code": "19195",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Wright County",
    "code": "19197",
    "regionCode": "IA",
    "hasWard": false
  },
  {
    "name": "Allen County",
    "code": "20001",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Anderson County",
    "code": "20003",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Atchison County",
    "code": "20005",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Barber County",
    "code": "20007",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Barton County",
    "code": "20009",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Bourbon County",
    "code": "20011",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "20013",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "20015",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Chase County",
    "code": "20017",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Chautauqua County",
    "code": "20019",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "20021",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Cheyenne County",
    "code": "20023",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "20025",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "20027",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Cloud County",
    "code": "20029",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Coffey County",
    "code": "20031",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Comanche County",
    "code": "20033",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Cowley County",
    "code": "20035",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "20037",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Decatur County",
    "code": "20039",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Dickinson County",
    "code": "20041",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Doniphan County",
    "code": "20043",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "20045",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Edwards County",
    "code": "20047",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Elk County",
    "code": "20049",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Ellis County",
    "code": "20051",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Ellsworth County",
    "code": "20053",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Finney County",
    "code": "20055",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Ford County",
    "code": "20057",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "20059",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Geary County",
    "code": "20061",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Gove County",
    "code": "20063",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Graham County",
    "code": "20065",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "20067",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Gray County",
    "code": "20069",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Greeley County",
    "code": "20071",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Greenwood County",
    "code": "20073",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "20075",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Harper County",
    "code": "20077",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Harvey County",
    "code": "20079",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Haskell County",
    "code": "20081",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Hodgeman County",
    "code": "20083",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "20085",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "20087",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Jewell County",
    "code": "20089",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "20091",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Kearny County",
    "code": "20093",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Kingman County",
    "code": "20095",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Kiowa County",
    "code": "20097",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Labette County",
    "code": "20099",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Lane County",
    "code": "20101",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Leavenworth County",
    "code": "20103",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "20105",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Linn County",
    "code": "20107",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "20109",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Lyon County",
    "code": "20111",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "McPherson County",
    "code": "20113",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "20115",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "20117",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Meade County",
    "code": "20119",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Miami County",
    "code": "20121",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Mitchell County",
    "code": "20123",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "20125",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Morris County",
    "code": "20127",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Morton County",
    "code": "20129",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Nemaha County",
    "code": "20131",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Neosho County",
    "code": "20133",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Ness County",
    "code": "20135",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Norton County",
    "code": "20137",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Osage County",
    "code": "20139",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Osborne County",
    "code": "20141",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Ottawa County",
    "code": "20143",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Pawnee County",
    "code": "20145",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Phillips County",
    "code": "20147",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Pottawatomie County",
    "code": "20149",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Pratt County",
    "code": "20151",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Rawlins County",
    "code": "20153",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Reno County",
    "code": "20155",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Republic County",
    "code": "20157",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Rice County",
    "code": "20159",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Riley County",
    "code": "20161",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Rooks County",
    "code": "20163",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Rush County",
    "code": "20165",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Russell County",
    "code": "20167",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Saline County",
    "code": "20169",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "20171",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Sedgwick County",
    "code": "20173",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Seward County",
    "code": "20175",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Shawnee County",
    "code": "20177",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Sheridan County",
    "code": "20179",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Sherman County",
    "code": "20181",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Smith County",
    "code": "20183",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Stafford County",
    "code": "20185",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Stanton County",
    "code": "20187",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Stevens County",
    "code": "20189",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Sumner County",
    "code": "20191",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Thomas County",
    "code": "20193",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Trego County",
    "code": "20195",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Wabaunsee County",
    "code": "20197",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Wallace County",
    "code": "20199",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "20201",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Wichita County",
    "code": "20203",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Wilson County",
    "code": "20205",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Woodson County",
    "code": "20207",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Wyandotte County",
    "code": "20209",
    "regionCode": "KS",
    "hasWard": false
  },
  {
    "name": "Adair County",
    "code": "21001",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Allen County",
    "code": "21003",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Anderson County",
    "code": "21005",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Ballard County",
    "code": "21007",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Barren County",
    "code": "21009",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Bath County",
    "code": "21011",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Bell County",
    "code": "21013",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "21015",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Bourbon County",
    "code": "21017",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Boyd County",
    "code": "21019",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Boyle County",
    "code": "21021",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Bracken County",
    "code": "21023",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Breathitt County",
    "code": "21025",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Breckinridge County",
    "code": "21027",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Bullitt County",
    "code": "21029",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "21031",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Caldwell County",
    "code": "21033",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Calloway County",
    "code": "21035",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Campbell County",
    "code": "21037",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Carlisle County",
    "code": "21039",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "21041",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Carter County",
    "code": "21043",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Casey County",
    "code": "21045",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Christian County",
    "code": "21047",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "21049",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "21051",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "21053",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Crittenden County",
    "code": "21055",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "21057",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Daviess County",
    "code": "21059",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Edmonson County",
    "code": "21061",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Elliott County",
    "code": "21063",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Estill County",
    "code": "21065",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "21067",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Fleming County",
    "code": "21069",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "21071",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "21073",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "21075",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Gallatin County",
    "code": "21077",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Garrard County",
    "code": "21079",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "21081",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Graves County",
    "code": "21083",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Grayson County",
    "code": "21085",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Green County",
    "code": "21087",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Greenup County",
    "code": "21089",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "21091",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "21093",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Harlan County",
    "code": "21095",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "21097",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Hart County",
    "code": "21099",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Henderson County",
    "code": "21101",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "21103",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Hickman County",
    "code": "21105",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Hopkins County",
    "code": "21107",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "21109",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "21111",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Jessamine County",
    "code": "21113",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "21115",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Kenton County",
    "code": "21117",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Knott County",
    "code": "21119",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "21121",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Larue County",
    "code": "21123",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Laurel County",
    "code": "21125",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "21127",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "21129",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Leslie County",
    "code": "21131",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Letcher County",
    "code": "21133",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "21135",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "21137",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Livingston County",
    "code": "21139",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "21141",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Lyon County",
    "code": "21143",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "McCracken County",
    "code": "21145",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "McCreary County",
    "code": "21147",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "McLean County",
    "code": "21149",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "21151",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Magoffin County",
    "code": "21153",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "21155",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "21157",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "21159",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "21161",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Meade County",
    "code": "21163",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Menifee County",
    "code": "21165",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "21167",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Metcalfe County",
    "code": "21169",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "21171",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "21173",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "21175",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Muhlenberg County",
    "code": "21177",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Nelson County",
    "code": "21179",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Nicholas County",
    "code": "21181",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Ohio County",
    "code": "21183",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Oldham County",
    "code": "21185",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Owen County",
    "code": "21187",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Owsley County",
    "code": "21189",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Pendleton County",
    "code": "21191",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "21193",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "21195",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Powell County",
    "code": "21197",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "21199",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Robertson County",
    "code": "21201",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Rockcastle County",
    "code": "21203",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Rowan County",
    "code": "21205",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Russell County",
    "code": "21207",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "21209",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "21211",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Simpson County",
    "code": "21213",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Spencer County",
    "code": "21215",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "21217",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Todd County",
    "code": "21219",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Trigg County",
    "code": "21221",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Trimble County",
    "code": "21223",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "21225",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "21227",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "21229",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "21231",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "21233",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Whitley County",
    "code": "21235",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Wolfe County",
    "code": "21237",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Woodford County",
    "code": "21239",
    "regionCode": "KY",
    "hasWard": false
  },
  {
    "name": "Acadia Parish",
    "code": "22001",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Allen Parish",
    "code": "22003",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Ascension Parish",
    "code": "22005",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Assumption Parish",
    "code": "22007",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Avoyelles Parish",
    "code": "22009",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Beauregard Parish",
    "code": "22011",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Bienville Parish",
    "code": "22013",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Bossier Parish",
    "code": "22015",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Caddo Parish",
    "code": "22017",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Calcasieu Parish",
    "code": "22019",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Caldwell Parish",
    "code": "22021",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Cameron Parish",
    "code": "22023",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Catahoula Parish",
    "code": "22025",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Claiborne Parish",
    "code": "22027",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Concordia Parish",
    "code": "22029",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "De Soto Parish",
    "code": "22031",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "East Baton Rouge Parish",
    "code": "22033",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "East Carroll Parish",
    "code": "22035",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "East Feliciana Parish",
    "code": "22037",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Evangeline Parish",
    "code": "22039",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Franklin Parish",
    "code": "22041",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Grant Parish",
    "code": "22043",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Iberia Parish",
    "code": "22045",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Iberville Parish",
    "code": "22047",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Jackson Parish",
    "code": "22049",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Jefferson Parish",
    "code": "22051",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Jefferson Davis Parish",
    "code": "22053",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Lafayette Parish",
    "code": "22055",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Lafourche Parish",
    "code": "22057",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "La Salle Parish",
    "code": "22059",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Lincoln Parish",
    "code": "22061",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Livingston Parish",
    "code": "22063",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Madison Parish",
    "code": "22065",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Morehouse Parish",
    "code": "22067",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Natchitoches Parish",
    "code": "22069",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Orleans Parish",
    "code": "22071",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Ouachita Parish",
    "code": "22073",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Plaquemines Parish",
    "code": "22075",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Pointe Coupee Parish",
    "code": "22077",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Rapides Parish",
    "code": "22079",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Red River Parish",
    "code": "22081",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Richland Parish",
    "code": "22083",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Sabine Parish",
    "code": "22085",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Bernard Parish",
    "code": "22087",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Charles Parish",
    "code": "22089",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Helena Parish",
    "code": "22091",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. James Parish",
    "code": "22093",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. John the Baptist Parish",
    "code": "22095",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Landry Parish",
    "code": "22097",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Martin Parish",
    "code": "22099",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Mary Parish",
    "code": "22101",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "St. Tammany Parish",
    "code": "22103",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Tangipahoa Parish",
    "code": "22105",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Tensas Parish",
    "code": "22107",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Terrebonne Parish",
    "code": "22109",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Union Parish",
    "code": "22111",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Vermilion Parish",
    "code": "22113",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Vernon Parish",
    "code": "22115",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Washington Parish",
    "code": "22117",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Webster Parish",
    "code": "22119",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "West Baton Rouge Parish",
    "code": "22121",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "West Carroll Parish",
    "code": "22123",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "West Feliciana Parish",
    "code": "22125",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Winn Parish",
    "code": "22127",
    "regionCode": "LA",
    "hasWard": false
  },
  {
    "name": "Androscoggin County",
    "code": "23001",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Aroostook County",
    "code": "23003",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "23005",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "23007",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "23009",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Kennebec County",
    "code": "23011",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "23013",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "23015",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Oxford County",
    "code": "23017",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Penobscot County",
    "code": "23019",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Piscataquis County",
    "code": "23021",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Sagadahoc County",
    "code": "23023",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Somerset County",
    "code": "23025",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Waldo County",
    "code": "23027",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "23029",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "York County",
    "code": "23031",
    "regionCode": "ME",
    "hasWard": false
  },
  {
    "name": "Allegany County",
    "code": "24001",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Anne Arundel County",
    "code": "24003",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Baltimore County",
    "code": "24005",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Calvert County",
    "code": "24009",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Caroline County",
    "code": "24011",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "24013",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Cecil County",
    "code": "24015",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Charles County",
    "code": "24017",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Dorchester County",
    "code": "24019",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Frederick County",
    "code": "24021",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Garrett County",
    "code": "24023",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Harford County",
    "code": "24025",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "24027",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Kent County",
    "code": "24029",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "24031",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Prince George's County",
    "code": "24033",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Queen Anne's County",
    "code": "24035",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "St. Mary's County",
    "code": "24037",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Somerset County",
    "code": "24039",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Talbot County",
    "code": "24041",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "24043",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Wicomico County",
    "code": "24045",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Worcester County",
    "code": "24047",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Baltimore city",
    "code": "24510",
    "regionCode": "MD",
    "hasWard": false
  },
  {
    "name": "Barnstable County",
    "code": "25001",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Berkshire County",
    "code": "25003",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Bristol County",
    "code": "25005",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Dukes County",
    "code": "25007",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Essex County",
    "code": "25009",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "25011",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Hampden County",
    "code": "25013",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Hampshire County",
    "code": "25015",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Middlesex County",
    "code": "25017",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Nantucket County",
    "code": "25019",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Norfolk County",
    "code": "25021",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Plymouth County",
    "code": "25023",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Suffolk County",
    "code": "25025",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Worcester County",
    "code": "25027",
    "regionCode": "MA",
    "hasWard": false
  },
  {
    "name": "Alcona County",
    "code": "26001",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Alger County",
    "code": "26003",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Allegan County",
    "code": "26005",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Alpena County",
    "code": "26007",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Antrim County",
    "code": "26009",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Arenac County",
    "code": "26011",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Baraga County",
    "code": "26013",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Barry County",
    "code": "26015",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Bay County",
    "code": "26017",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Benzie County",
    "code": "26019",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Berrien County",
    "code": "26021",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Branch County",
    "code": "26023",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "26025",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "26027",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Charlevoix County",
    "code": "26029",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Cheboygan County",
    "code": "26031",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Chippewa County",
    "code": "26033",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Clare County",
    "code": "26035",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "26037",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "26039",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Delta County",
    "code": "26041",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Dickinson County",
    "code": "26043",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Eaton County",
    "code": "26045",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Emmet County",
    "code": "26047",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Genesee County",
    "code": "26049",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Gladwin County",
    "code": "26051",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Gogebic County",
    "code": "26053",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Grand Traverse County",
    "code": "26055",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Gratiot County",
    "code": "26057",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Hillsdale County",
    "code": "26059",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Houghton County",
    "code": "26061",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Huron County",
    "code": "26063",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Ingham County",
    "code": "26065",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Ionia County",
    "code": "26067",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Iosco County",
    "code": "26069",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Iron County",
    "code": "26071",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Isabella County",
    "code": "26073",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "26075",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Kalamazoo County",
    "code": "26077",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Kalkaska County",
    "code": "26079",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Kent County",
    "code": "26081",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Keweenaw County",
    "code": "26083",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "26085",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Lapeer County",
    "code": "26087",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Leelanau County",
    "code": "26089",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Lenawee County",
    "code": "26091",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Livingston County",
    "code": "26093",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Luce County",
    "code": "26095",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Mackinac County",
    "code": "26097",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Macomb County",
    "code": "26099",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Manistee County",
    "code": "26101",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Marquette County",
    "code": "26103",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "26105",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Mecosta County",
    "code": "26107",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Menominee County",
    "code": "26109",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Midland County",
    "code": "26111",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Missaukee County",
    "code": "26113",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "26115",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Montcalm County",
    "code": "26117",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Montmorency County",
    "code": "26119",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Muskegon County",
    "code": "26121",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Newaygo County",
    "code": "26123",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Oakland County",
    "code": "26125",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Oceana County",
    "code": "26127",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Ogemaw County",
    "code": "26129",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Ontonagon County",
    "code": "26131",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Osceola County",
    "code": "26133",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Oscoda County",
    "code": "26135",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Otsego County",
    "code": "26137",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Ottawa County",
    "code": "26139",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Presque Isle County",
    "code": "26141",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Roscommon County",
    "code": "26143",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Saginaw County",
    "code": "26145",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "St. Clair County",
    "code": "26147",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "St. Joseph County",
    "code": "26149",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Sanilac County",
    "code": "26151",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Schoolcraft County",
    "code": "26153",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Shiawassee County",
    "code": "26155",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Tuscola County",
    "code": "26157",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Van Buren County",
    "code": "26159",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Washtenaw County",
    "code": "26161",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "26163",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Wexford County",
    "code": "26165",
    "regionCode": "MI",
    "hasWard": false
  },
  {
    "name": "Aitkin County",
    "code": "27001",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Anoka County",
    "code": "27003",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Becker County",
    "code": "27005",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Beltrami County",
    "code": "27007",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "27009",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Big Stone County",
    "code": "27011",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Blue Earth County",
    "code": "27013",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "27015",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Carlton County",
    "code": "27017",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Carver County",
    "code": "27019",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "27021",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Chippewa County",
    "code": "27023",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Chisago County",
    "code": "27025",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "27027",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Clearwater County",
    "code": "27029",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Cook County",
    "code": "27031",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Cottonwood County",
    "code": "27033",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Crow Wing County",
    "code": "27035",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Dakota County",
    "code": "27037",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Dodge County",
    "code": "27039",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "27041",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Faribault County",
    "code": "27043",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Fillmore County",
    "code": "27045",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Freeborn County",
    "code": "27047",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Goodhue County",
    "code": "27049",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "27051",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Hennepin County",
    "code": "27053",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Houston County",
    "code": "27055",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Hubbard County",
    "code": "27057",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Isanti County",
    "code": "27059",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Itasca County",
    "code": "27061",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "27063",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Kanabec County",
    "code": "27065",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Kandiyohi County",
    "code": "27067",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Kittson County",
    "code": "27069",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Koochiching County",
    "code": "27071",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Lac qui Parle County",
    "code": "27073",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "27075",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Lake of the Woods County",
    "code": "27077",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Le Sueur County",
    "code": "27079",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "27081",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Lyon County",
    "code": "27083",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "McLeod County",
    "code": "27085",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Mahnomen County",
    "code": "27087",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "27089",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "27091",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Meeker County",
    "code": "27093",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Mille Lacs County",
    "code": "27095",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Morrison County",
    "code": "27097",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Mower County",
    "code": "27099",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Murray County",
    "code": "27101",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Nicollet County",
    "code": "27103",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Nobles County",
    "code": "27105",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Norman County",
    "code": "27107",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Olmsted County",
    "code": "27109",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Otter Tail County",
    "code": "27111",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Pennington County",
    "code": "27113",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Pine County",
    "code": "27115",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Pipestone County",
    "code": "27117",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "27119",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Pope County",
    "code": "27121",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Ramsey County",
    "code": "27123",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Red Lake County",
    "code": "27125",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Redwood County",
    "code": "27127",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Renville County",
    "code": "27129",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Rice County",
    "code": "27131",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Rock County",
    "code": "27133",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Roseau County",
    "code": "27135",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "St. Louis County",
    "code": "27137",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "27139",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Sherburne County",
    "code": "27141",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Sibley County",
    "code": "27143",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Stearns County",
    "code": "27145",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Steele County",
    "code": "27147",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Stevens County",
    "code": "27149",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Swift County",
    "code": "27151",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Todd County",
    "code": "27153",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Traverse County",
    "code": "27155",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Wabasha County",
    "code": "27157",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Wadena County",
    "code": "27159",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Waseca County",
    "code": "27161",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "27163",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Watonwan County",
    "code": "27165",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Wilkin County",
    "code": "27167",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Winona County",
    "code": "27169",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Wright County",
    "code": "27171",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Yellow Medicine County",
    "code": "27173",
    "regionCode": "MN",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "28001",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Alcorn County",
    "code": "28003",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Amite County",
    "code": "28005",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Attala County",
    "code": "28007",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "28009",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Bolivar County",
    "code": "28011",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "28013",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "28015",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Chickasaw County",
    "code": "28017",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Choctaw County",
    "code": "28019",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Claiborne County",
    "code": "28021",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Clarke County",
    "code": "28023",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "28025",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Coahoma County",
    "code": "28027",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Copiah County",
    "code": "28029",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Covington County",
    "code": "28031",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "DeSoto County",
    "code": "28033",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Forrest County",
    "code": "28035",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "28037",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "George County",
    "code": "28039",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "28041",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Grenada County",
    "code": "28043",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "28045",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "28047",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Hinds County",
    "code": "28049",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Holmes County",
    "code": "28051",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Humphreys County",
    "code": "28053",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Issaquena County",
    "code": "28055",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Itawamba County",
    "code": "28057",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "28059",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "28061",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "28063",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Jefferson Davis County",
    "code": "28065",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "28067",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Kemper County",
    "code": "28069",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lafayette County",
    "code": "28071",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lamar County",
    "code": "28073",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lauderdale County",
    "code": "28075",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "28077",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Leake County",
    "code": "28079",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "28081",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Leflore County",
    "code": "28083",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "28085",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Lowndes County",
    "code": "28087",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "28089",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "28091",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "28093",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "28095",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "28097",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Neshoba County",
    "code": "28099",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "28101",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Noxubee County",
    "code": "28103",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Oktibbeha County",
    "code": "28105",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Panola County",
    "code": "28107",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Pearl River County",
    "code": "28109",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "28111",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "28113",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Pontotoc County",
    "code": "28115",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Prentiss County",
    "code": "28117",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Quitman County",
    "code": "28119",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Rankin County",
    "code": "28121",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "28123",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Sharkey County",
    "code": "28125",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Simpson County",
    "code": "28127",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Smith County",
    "code": "28129",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Stone County",
    "code": "28131",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Sunflower County",
    "code": "28133",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Tallahatchie County",
    "code": "28135",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Tate County",
    "code": "28137",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Tippah County",
    "code": "28139",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Tishomingo County",
    "code": "28141",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Tunica County",
    "code": "28143",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "28145",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Walthall County",
    "code": "28147",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "28149",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "28151",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "28153",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "28155",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Wilkinson County",
    "code": "28157",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Winston County",
    "code": "28159",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Yalobusha County",
    "code": "28161",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Yazoo County",
    "code": "28163",
    "regionCode": "MS",
    "hasWard": false
  },
  {
    "name": "Adair County",
    "code": "29001",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Andrew County",
    "code": "29003",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Atchison County",
    "code": "29005",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Audrain County",
    "code": "29007",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Barry County",
    "code": "29009",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Barton County",
    "code": "29011",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Bates County",
    "code": "29013",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "29015",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Bollinger County",
    "code": "29017",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "29019",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Buchanan County",
    "code": "29021",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "29023",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Caldwell County",
    "code": "29025",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Callaway County",
    "code": "29027",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Camden County",
    "code": "29029",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Cape Girardeau County",
    "code": "29031",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "29033",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Carter County",
    "code": "29035",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "29037",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Cedar County",
    "code": "29039",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Chariton County",
    "code": "29041",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Christian County",
    "code": "29043",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "29045",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "29047",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "29049",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Cole County",
    "code": "29051",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Cooper County",
    "code": "29053",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "29055",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Dade County",
    "code": "29057",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Dallas County",
    "code": "29059",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Daviess County",
    "code": "29061",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "29063",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Dent County",
    "code": "29065",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "29067",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Dunklin County",
    "code": "29069",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "29071",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Gasconade County",
    "code": "29073",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Gentry County",
    "code": "29075",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "29077",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Grundy County",
    "code": "29079",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "29081",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "29083",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Hickory County",
    "code": "29085",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Holt County",
    "code": "29087",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "29089",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Howell County",
    "code": "29091",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Iron County",
    "code": "29093",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "29095",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "29097",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "29099",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "29101",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "29103",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Laclede County",
    "code": "29105",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Lafayette County",
    "code": "29107",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "29109",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "29111",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "29113",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Linn County",
    "code": "29115",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Livingston County",
    "code": "29117",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "McDonald County",
    "code": "29119",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "29121",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "29123",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Maries County",
    "code": "29125",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "29127",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "29129",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Miller County",
    "code": "29131",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Mississippi County",
    "code": "29133",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Moniteau County",
    "code": "29135",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "29137",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "29139",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "29141",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "New Madrid County",
    "code": "29143",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "29145",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Nodaway County",
    "code": "29147",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Oregon County",
    "code": "29149",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Osage County",
    "code": "29151",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Ozark County",
    "code": "29153",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Pemiscot County",
    "code": "29155",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "29157",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Pettis County",
    "code": "29159",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Phelps County",
    "code": "29161",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "29163",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Platte County",
    "code": "29165",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "29167",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "29169",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "29171",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Ralls County",
    "code": "29173",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "29175",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Ray County",
    "code": "29177",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Reynolds County",
    "code": "29179",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Ripley County",
    "code": "29181",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "St. Charles County",
    "code": "29183",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "St. Clair County",
    "code": "29185",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Ste. Genevieve County",
    "code": "29186",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "St. Francois County",
    "code": "29187",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "St. Louis County",
    "code": "29189",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Saline County",
    "code": "29195",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Schuyler County",
    "code": "29197",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Scotland County",
    "code": "29199",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "29201",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Shannon County",
    "code": "29203",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "29205",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Stoddard County",
    "code": "29207",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Stone County",
    "code": "29209",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "29211",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Taney County",
    "code": "29213",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Texas County",
    "code": "29215",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Vernon County",
    "code": "29217",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "29219",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "29221",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "29223",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "29225",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Worth County",
    "code": "29227",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Wright County",
    "code": "29229",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "St. Louis city",
    "code": "29510",
    "regionCode": "MO",
    "hasWard": false
  },
  {
    "name": "Beaverhead County",
    "code": "30001",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Big Horn County",
    "code": "30003",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Blaine County",
    "code": "30005",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Broadwater County",
    "code": "30007",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Carbon County",
    "code": "30009",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Carter County",
    "code": "30011",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Cascade County",
    "code": "30013",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Chouteau County",
    "code": "30015",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "30017",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Daniels County",
    "code": "30019",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Dawson County",
    "code": "30021",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Deer Lodge County",
    "code": "30023",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Fallon County",
    "code": "30025",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Fergus County",
    "code": "30027",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Flathead County",
    "code": "30029",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Gallatin County",
    "code": "30031",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "30033",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Glacier County",
    "code": "30035",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Golden Valley County",
    "code": "30037",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Granite County",
    "code": "30039",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Hill County",
    "code": "30041",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "30043",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Judith Basin County",
    "code": "30045",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "30047",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Lewis and Clark County",
    "code": "30049",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Liberty County",
    "code": "30051",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "30053",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "McCone County",
    "code": "30055",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "30057",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Meagher County",
    "code": "30059",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Mineral County",
    "code": "30061",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Missoula County",
    "code": "30063",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Musselshell County",
    "code": "30065",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Park County",
    "code": "30067",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Petroleum County",
    "code": "30069",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Phillips County",
    "code": "30071",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Pondera County",
    "code": "30073",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Powder River County",
    "code": "30075",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Powell County",
    "code": "30077",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Prairie County",
    "code": "30079",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Ravalli County",
    "code": "30081",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "30083",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Roosevelt County",
    "code": "30085",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Rosebud County",
    "code": "30087",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Sanders County",
    "code": "30089",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Sheridan County",
    "code": "30091",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Silver Bow County",
    "code": "30093",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Stillwater County",
    "code": "30095",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Sweet Grass County",
    "code": "30097",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Teton County",
    "code": "30099",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Toole County",
    "code": "30101",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Treasure County",
    "code": "30103",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Valley County",
    "code": "30105",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Wheatland County",
    "code": "30107",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Wibaux County",
    "code": "30109",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Yellowstone County",
    "code": "30111",
    "regionCode": "MT",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "31001",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Antelope County",
    "code": "31003",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Arthur County",
    "code": "31005",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Banner County",
    "code": "31007",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Blaine County",
    "code": "31009",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "31011",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Box Butte County",
    "code": "31013",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Boyd County",
    "code": "31015",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "31017",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Buffalo County",
    "code": "31019",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Burt County",
    "code": "31021",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "31023",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "31025",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Cedar County",
    "code": "31027",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Chase County",
    "code": "31029",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Cherry County",
    "code": "31031",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Cheyenne County",
    "code": "31033",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "31035",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Colfax County",
    "code": "31037",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Cuming County",
    "code": "31039",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "31041",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dakota County",
    "code": "31043",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dawes County",
    "code": "31045",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dawson County",
    "code": "31047",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Deuel County",
    "code": "31049",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dixon County",
    "code": "31051",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dodge County",
    "code": "31053",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "31055",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Dundy County",
    "code": "31057",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Fillmore County",
    "code": "31059",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "31061",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Frontier County",
    "code": "31063",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Furnas County",
    "code": "31065",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Gage County",
    "code": "31067",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Garden County",
    "code": "31069",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "31071",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Gosper County",
    "code": "31073",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "31075",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Greeley County",
    "code": "31077",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Hall County",
    "code": "31079",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "31081",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Harlan County",
    "code": "31083",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Hayes County",
    "code": "31085",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Hitchcock County",
    "code": "31087",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Holt County",
    "code": "31089",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Hooker County",
    "code": "31091",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "31093",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "31095",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "31097",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Kearney County",
    "code": "31099",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Keith County",
    "code": "31101",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Keya Paha County",
    "code": "31103",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Kimball County",
    "code": "31105",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "31107",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Lancaster County",
    "code": "31109",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "31111",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "31113",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Loup County",
    "code": "31115",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "McPherson County",
    "code": "31117",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "31119",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Merrick County",
    "code": "31121",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Morrill County",
    "code": "31123",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Nance County",
    "code": "31125",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Nemaha County",
    "code": "31127",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Nuckolls County",
    "code": "31129",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Otoe County",
    "code": "31131",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Pawnee County",
    "code": "31133",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Perkins County",
    "code": "31135",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Phelps County",
    "code": "31137",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Pierce County",
    "code": "31139",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Platte County",
    "code": "31141",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "31143",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Red Willow County",
    "code": "31145",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Richardson County",
    "code": "31147",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Rock County",
    "code": "31149",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Saline County",
    "code": "31151",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Sarpy County",
    "code": "31153",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Saunders County",
    "code": "31155",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Scotts Bluff County",
    "code": "31157",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Seward County",
    "code": "31159",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Sheridan County",
    "code": "31161",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Sherman County",
    "code": "31163",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Sioux County",
    "code": "31165",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Stanton County",
    "code": "31167",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Thayer County",
    "code": "31169",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Thomas County",
    "code": "31171",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Thurston County",
    "code": "31173",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Valley County",
    "code": "31175",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "31177",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "31179",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "31181",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Wheeler County",
    "code": "31183",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "York County",
    "code": "31185",
    "regionCode": "NE",
    "hasWard": false
  },
  {
    "name": "Churchill County",
    "code": "32001",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "32003",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "32005",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Elko County",
    "code": "32007",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Esmeralda County",
    "code": "32009",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Eureka County",
    "code": "32011",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Humboldt County",
    "code": "32013",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Lander County",
    "code": "32015",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "32017",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Lyon County",
    "code": "32019",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Mineral County",
    "code": "32021",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Nye County",
    "code": "32023",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Pershing County",
    "code": "32027",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Storey County",
    "code": "32029",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Washoe County",
    "code": "32031",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "White Pine County",
    "code": "32033",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Carson City",
    "code": "32510",
    "regionCode": "NV",
    "hasWard": false
  },
  {
    "name": "Belknap County",
    "code": "33001",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "33003",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Cheshire County",
    "code": "33005",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Coos County",
    "code": "33007",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Grafton County",
    "code": "33009",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Hillsborough County",
    "code": "33011",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Merrimack County",
    "code": "33013",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Rockingham County",
    "code": "33015",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Strafford County",
    "code": "33017",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "33019",
    "regionCode": "NH",
    "hasWard": false
  },
  {
    "name": "Atlantic County",
    "code": "34001",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Bergen County",
    "code": "34003",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Burlington County",
    "code": "34005",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Camden County",
    "code": "34007",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Cape May County",
    "code": "34009",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "34011",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Essex County",
    "code": "34013",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Gloucester County",
    "code": "34015",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Hudson County",
    "code": "34017",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Hunterdon County",
    "code": "34019",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "34021",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Middlesex County",
    "code": "34023",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Monmouth County",
    "code": "34025",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Morris County",
    "code": "34027",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Ocean County",
    "code": "34029",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Passaic County",
    "code": "34031",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Salem County",
    "code": "34033",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Somerset County",
    "code": "34035",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Sussex County",
    "code": "34037",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "34039",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "34041",
    "regionCode": "NJ",
    "hasWard": false
  },
  {
    "name": "Bernalillo County",
    "code": "35001",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Catron County",
    "code": "35003",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Chaves County",
    "code": "35005",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Cibola County",
    "code": "35006",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Colfax County",
    "code": "35007",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Curry County",
    "code": "35009",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "De Baca County",
    "code": "35011",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Do̱a Ana County",
    "code": "35013",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Eddy County",
    "code": "35015",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "35017",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Guadalupe County",
    "code": "35019",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Harding County",
    "code": "35021",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Hidalgo County",
    "code": "35023",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Lea County",
    "code": "35025",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "35027",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Los Alamos County",
    "code": "35028",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Luna County",
    "code": "35029",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "McKinley County",
    "code": "35031",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Mora County",
    "code": "35033",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Otero County",
    "code": "35035",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Quay County",
    "code": "35037",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Rio Arriba County",
    "code": "35039",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Roosevelt County",
    "code": "35041",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Sandoval County",
    "code": "35043",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "San Juan County",
    "code": "35045",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "San Miguel County",
    "code": "35047",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Santa Fe County",
    "code": "35049",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Sierra County",
    "code": "35051",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Socorro County",
    "code": "35053",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Taos County",
    "code": "35055",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Torrance County",
    "code": "35057",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "35059",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Valencia County",
    "code": "35061",
    "regionCode": "NM",
    "hasWard": false
  },
  {
    "name": "Albany County",
    "code": "36001",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Allegany County",
    "code": "36003",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Bronx County",
    "code": "36005",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Broome County",
    "code": "36007",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Cattaraugus County",
    "code": "36009",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Cayuga County",
    "code": "36011",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Chautauqua County",
    "code": "36013",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Chemung County",
    "code": "36015",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Chenango County",
    "code": "36017",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "36019",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "36021",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Cortland County",
    "code": "36023",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "36025",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Dutchess County",
    "code": "36027",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Erie County",
    "code": "36029",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Essex County",
    "code": "36031",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "36033",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "36035",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Genesee County",
    "code": "36037",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "36039",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "36041",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Herkimer County",
    "code": "36043",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "36045",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Kings County",
    "code": "36047",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "36049",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Livingston County",
    "code": "36051",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "36053",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "36055",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "36057",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Nassau County",
    "code": "36059",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "New York County",
    "code": "36061",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Niagara County",
    "code": "36063",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Oneida County",
    "code": "36065",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Onondaga County",
    "code": "36067",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Ontario County",
    "code": "36069",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "36071",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Orleans County",
    "code": "36073",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Oswego County",
    "code": "36075",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Otsego County",
    "code": "36077",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "36079",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Queens County",
    "code": "36081",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Rensselaer County",
    "code": "36083",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Richmond County",
    "code": "36085",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Rockland County",
    "code": "36087",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "St. Lawrence County",
    "code": "36089",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Saratoga County",
    "code": "36091",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Schenectady County",
    "code": "36093",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Schoharie County",
    "code": "36095",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Schuyler County",
    "code": "36097",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Seneca County",
    "code": "36099",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Steuben County",
    "code": "36101",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Suffolk County",
    "code": "36103",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "36105",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Tioga County",
    "code": "36107",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Tompkins County",
    "code": "36109",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Ulster County",
    "code": "36111",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "36113",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "36115",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "36117",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Westchester County",
    "code": "36119",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Wyoming County",
    "code": "36121",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Yates County",
    "code": "36123",
    "regionCode": "NY",
    "hasWard": false
  },
  {
    "name": "Alamance County",
    "code": "37001",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Alexander County",
    "code": "37003",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Alleghany County",
    "code": "37005",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Anson County",
    "code": "37007",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Ashe County",
    "code": "37009",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Avery County",
    "code": "37011",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Beaufort County",
    "code": "37013",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Bertie County",
    "code": "37015",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Bladen County",
    "code": "37017",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Brunswick County",
    "code": "37019",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Buncombe County",
    "code": "37021",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Burke County",
    "code": "37023",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Cabarrus County",
    "code": "37025",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Caldwell County",
    "code": "37027",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Camden County",
    "code": "37029",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Carteret County",
    "code": "37031",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Caswell County",
    "code": "37033",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Catawba County",
    "code": "37035",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Chatham County",
    "code": "37037",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "37039",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Chowan County",
    "code": "37041",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "37043",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Cleveland County",
    "code": "37045",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Columbus County",
    "code": "37047",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Craven County",
    "code": "37049",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "37051",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Currituck County",
    "code": "37053",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Dare County",
    "code": "37055",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Davidson County",
    "code": "37057",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Davie County",
    "code": "37059",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Duplin County",
    "code": "37061",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Durham County",
    "code": "37063",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Edgecombe County",
    "code": "37065",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Forsyth County",
    "code": "37067",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "37069",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Gaston County",
    "code": "37071",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Gates County",
    "code": "37073",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Graham County",
    "code": "37075",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Granville County",
    "code": "37077",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "37079",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Guilford County",
    "code": "37081",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Halifax County",
    "code": "37083",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Harnett County",
    "code": "37085",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Haywood County",
    "code": "37087",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Henderson County",
    "code": "37089",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Hertford County",
    "code": "37091",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Hoke County",
    "code": "37093",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Hyde County",
    "code": "37095",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Iredell County",
    "code": "37097",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "37099",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Johnston County",
    "code": "37101",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "37103",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "37105",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Lenoir County",
    "code": "37107",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "37109",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "McDowell County",
    "code": "37111",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "37113",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "37115",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "37117",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Mecklenburg County",
    "code": "37119",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Mitchell County",
    "code": "37121",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "37123",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Moore County",
    "code": "37125",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Nash County",
    "code": "37127",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "New Hanover County",
    "code": "37129",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Northampton County",
    "code": "37131",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Onslow County",
    "code": "37133",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "37135",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Pamlico County",
    "code": "37137",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Pasquotank County",
    "code": "37139",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Pender County",
    "code": "37141",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Perquimans County",
    "code": "37143",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Person County",
    "code": "37145",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Pitt County",
    "code": "37147",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "37149",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "37151",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Richmond County",
    "code": "37153",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Robeson County",
    "code": "37155",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Rockingham County",
    "code": "37157",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Rowan County",
    "code": "37159",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Rutherford County",
    "code": "37161",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Sampson County",
    "code": "37163",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Scotland County",
    "code": "37165",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Stanly County",
    "code": "37167",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Stokes County",
    "code": "37169",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Surry County",
    "code": "37171",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Swain County",
    "code": "37173",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Transylvania County",
    "code": "37175",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Tyrrell County",
    "code": "37177",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "37179",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Vance County",
    "code": "37181",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Wake County",
    "code": "37183",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "37185",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "37187",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Watauga County",
    "code": "37189",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "37191",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Wilkes County",
    "code": "37193",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Wilson County",
    "code": "37195",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Yadkin County",
    "code": "37197",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Yancey County",
    "code": "37199",
    "regionCode": "NC",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "38001",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Barnes County",
    "code": "38003",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Benson County",
    "code": "38005",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Billings County",
    "code": "38007",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Bottineau County",
    "code": "38009",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Bowman County",
    "code": "38011",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Burke County",
    "code": "38013",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Burleigh County",
    "code": "38015",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "38017",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Cavalier County",
    "code": "38019",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Dickey County",
    "code": "38021",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Divide County",
    "code": "38023",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Dunn County",
    "code": "38025",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Eddy County",
    "code": "38027",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Emmons County",
    "code": "38029",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Foster County",
    "code": "38031",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Golden Valley County",
    "code": "38033",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Grand Forks County",
    "code": "38035",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "38037",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Griggs County",
    "code": "38039",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Hettinger County",
    "code": "38041",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Kidder County",
    "code": "38043",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "LaMoure County",
    "code": "38045",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "38047",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "McHenry County",
    "code": "38049",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "McIntosh County",
    "code": "38051",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "McKenzie County",
    "code": "38053",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "McLean County",
    "code": "38055",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "38057",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Morton County",
    "code": "38059",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Mountrail County",
    "code": "38061",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Nelson County",
    "code": "38063",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Oliver County",
    "code": "38065",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Pembina County",
    "code": "38067",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Pierce County",
    "code": "38069",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Ramsey County",
    "code": "38071",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Ransom County",
    "code": "38073",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Renville County",
    "code": "38075",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "38077",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Rolette County",
    "code": "38079",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Sargent County",
    "code": "38081",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Sheridan County",
    "code": "38083",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Sioux County",
    "code": "38085",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Slope County",
    "code": "38087",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Stark County",
    "code": "38089",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Steele County",
    "code": "38091",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Stutsman County",
    "code": "38093",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Towner County",
    "code": "38095",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Traill County",
    "code": "38097",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Walsh County",
    "code": "38099",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Ward County",
    "code": "38101",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Wells County",
    "code": "38103",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Williams County",
    "code": "38105",
    "regionCode": "ND",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "39001",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Allen County",
    "code": "39003",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Ashland County",
    "code": "39005",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Ashtabula County",
    "code": "39007",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Athens County",
    "code": "39009",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Auglaize County",
    "code": "39011",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Belmont County",
    "code": "39013",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "39015",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "39017",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "39019",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Champaign County",
    "code": "39021",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "39023",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Clermont County",
    "code": "39025",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "39027",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Columbiana County",
    "code": "39029",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Coshocton County",
    "code": "39031",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "39033",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Cuyahoga County",
    "code": "39035",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Darke County",
    "code": "39037",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Defiance County",
    "code": "39039",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "39041",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Erie County",
    "code": "39043",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Fairfield County",
    "code": "39045",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "39047",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "39049",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "39051",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Gallia County",
    "code": "39053",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Geauga County",
    "code": "39055",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "39057",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Guernsey County",
    "code": "39059",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "39061",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "39063",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "39065",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "39067",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "39069",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Highland County",
    "code": "39071",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Hocking County",
    "code": "39073",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Holmes County",
    "code": "39075",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Huron County",
    "code": "39077",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "39079",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "39081",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "39083",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "39085",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "39087",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Licking County",
    "code": "39089",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "39091",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Lorain County",
    "code": "39093",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Lucas County",
    "code": "39095",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "39097",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Mahoning County",
    "code": "39099",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "39101",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Medina County",
    "code": "39103",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Meigs County",
    "code": "39105",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "39107",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Miami County",
    "code": "39109",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "39111",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "39113",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "39115",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Morrow County",
    "code": "39117",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Muskingum County",
    "code": "39119",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Noble County",
    "code": "39121",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Ottawa County",
    "code": "39123",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Paulding County",
    "code": "39125",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "39127",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Pickaway County",
    "code": "39129",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "39131",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Portage County",
    "code": "39133",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Preble County",
    "code": "39135",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "39137",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "39139",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Ross County",
    "code": "39141",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Sandusky County",
    "code": "39143",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Scioto County",
    "code": "39145",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Seneca County",
    "code": "39147",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "39149",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Stark County",
    "code": "39151",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Summit County",
    "code": "39153",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Trumbull County",
    "code": "39155",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Tuscarawas County",
    "code": "39157",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "39159",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Van Wert County",
    "code": "39161",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Vinton County",
    "code": "39163",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "39165",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "39167",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "39169",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Williams County",
    "code": "39171",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Wood County",
    "code": "39173",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Wyandot County",
    "code": "39175",
    "regionCode": "OH",
    "hasWard": false
  },
  {
    "name": "Adair County",
    "code": "40001",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Alfalfa County",
    "code": "40003",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Atoka County",
    "code": "40005",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Beaver County",
    "code": "40007",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Beckham County",
    "code": "40009",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Blaine County",
    "code": "40011",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Bryan County",
    "code": "40013",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Caddo County",
    "code": "40015",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Canadian County",
    "code": "40017",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Carter County",
    "code": "40019",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "40021",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Choctaw County",
    "code": "40023",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Cimarron County",
    "code": "40025",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Cleveland County",
    "code": "40027",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Coal County",
    "code": "40029",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Comanche County",
    "code": "40031",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Cotton County",
    "code": "40033",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Craig County",
    "code": "40035",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Creek County",
    "code": "40037",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "40039",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "40041",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Dewey County",
    "code": "40043",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Ellis County",
    "code": "40045",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "40047",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Garvin County",
    "code": "40049",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Grady County",
    "code": "40051",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "40053",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Greer County",
    "code": "40055",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Harmon County",
    "code": "40057",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Harper County",
    "code": "40059",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Haskell County",
    "code": "40061",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Hughes County",
    "code": "40063",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "40065",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "40067",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Johnston County",
    "code": "40069",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Kay County",
    "code": "40071",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Kingfisher County",
    "code": "40073",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Kiowa County",
    "code": "40075",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Latimer County",
    "code": "40077",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Le Flore County",
    "code": "40079",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "40081",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "40083",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Love County",
    "code": "40085",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "McClain County",
    "code": "40087",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "McCurtain County",
    "code": "40089",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "McIntosh County",
    "code": "40091",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Major County",
    "code": "40093",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "40095",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Mayes County",
    "code": "40097",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Murray County",
    "code": "40099",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Muskogee County",
    "code": "40101",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Noble County",
    "code": "40103",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Nowata County",
    "code": "40105",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Okfuskee County",
    "code": "40107",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Oklahoma County",
    "code": "40109",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Okmulgee County",
    "code": "40111",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Osage County",
    "code": "40113",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Ottawa County",
    "code": "40115",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Pawnee County",
    "code": "40117",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Payne County",
    "code": "40119",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Pittsburg County",
    "code": "40121",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Pontotoc County",
    "code": "40123",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Pottawatomie County",
    "code": "40125",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Pushmataha County",
    "code": "40127",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Roger Mills County",
    "code": "40129",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Rogers County",
    "code": "40131",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Seminole County",
    "code": "40133",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Sequoyah County",
    "code": "40135",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Stephens County",
    "code": "40137",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Texas County",
    "code": "40139",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Tillman County",
    "code": "40141",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Tulsa County",
    "code": "40143",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Wagoner County",
    "code": "40145",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "40147",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Washita County",
    "code": "40149",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Woods County",
    "code": "40151",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Woodward County",
    "code": "40153",
    "regionCode": "OK",
    "hasWard": false
  },
  {
    "name": "Baker County",
    "code": "41001",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "41003",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Clackamas County",
    "code": "41005",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Clatsop County",
    "code": "41007",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "41009",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Coos County",
    "code": "41011",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Crook County",
    "code": "41013",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Curry County",
    "code": "41015",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Deschutes County",
    "code": "41017",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "41019",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Gilliam County",
    "code": "41021",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "41023",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Harney County",
    "code": "41025",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Hood River County",
    "code": "41027",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "41029",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "41031",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Josephine County",
    "code": "41033",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Klamath County",
    "code": "41035",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "41037",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Lane County",
    "code": "41039",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "41041",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Linn County",
    "code": "41043",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Malheur County",
    "code": "41045",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "41047",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Morrow County",
    "code": "41049",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Multnomah County",
    "code": "41051",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "41053",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Sherman County",
    "code": "41055",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Tillamook County",
    "code": "41057",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Umatilla County",
    "code": "41059",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "41061",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Wallowa County",
    "code": "41063",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Wasco County",
    "code": "41065",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "41067",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Wheeler County",
    "code": "41069",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Yamhill County",
    "code": "41071",
    "regionCode": "OR",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "42001",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Allegheny County",
    "code": "42003",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Armstrong County",
    "code": "42005",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Beaver County",
    "code": "42007",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Bedford County",
    "code": "42009",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Berks County",
    "code": "42011",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Blair County",
    "code": "42013",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Bradford County",
    "code": "42015",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Bucks County",
    "code": "42017",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Butler County",
    "code": "42019",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Cambria County",
    "code": "42021",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Cameron County",
    "code": "42023",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Carbon County",
    "code": "42025",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Centre County",
    "code": "42027",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Chester County",
    "code": "42029",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Clarion County",
    "code": "42031",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Clearfield County",
    "code": "42033",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Clinton County",
    "code": "42035",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "42037",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "42039",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "42041",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Dauphin County",
    "code": "42043",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Delaware County",
    "code": "42045",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Elk County",
    "code": "42047",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Erie County",
    "code": "42049",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "42051",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Forest County",
    "code": "42053",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "42055",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Fulton County",
    "code": "42057",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "42059",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Huntingdon County",
    "code": "42061",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Indiana County",
    "code": "42063",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "42065",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Juniata County",
    "code": "42067",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lackawanna County",
    "code": "42069",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lancaster County",
    "code": "42071",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "42073",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lebanon County",
    "code": "42075",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lehigh County",
    "code": "42077",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Luzerne County",
    "code": "42079",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Lycoming County",
    "code": "42081",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "McKean County",
    "code": "42083",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "42085",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Mifflin County",
    "code": "42087",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "42089",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "42091",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Montour County",
    "code": "42093",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Northampton County",
    "code": "42095",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Northumberland County",
    "code": "42097",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "42099",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Philadelphia County",
    "code": "42101",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Pike County",
    "code": "42103",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Potter County",
    "code": "42105",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Schuylkill County",
    "code": "42107",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Snyder County",
    "code": "42109",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Somerset County",
    "code": "42111",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "42113",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Susquehanna County",
    "code": "42115",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Tioga County",
    "code": "42117",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "42119",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Venango County",
    "code": "42121",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "42123",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "42125",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "42127",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Westmoreland County",
    "code": "42129",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Wyoming County",
    "code": "42131",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "York County",
    "code": "42133",
    "regionCode": "PA",
    "hasWard": false
  },
  {
    "name": "Bristol County",
    "code": "44001",
    "regionCode": "RI",
    "hasWard": false
  },
  {
    "name": "Kent County",
    "code": "44003",
    "regionCode": "RI",
    "hasWard": false
  },
  {
    "name": "Newport County",
    "code": "44005",
    "regionCode": "RI",
    "hasWard": false
  },
  {
    "name": "Providence County",
    "code": "44007",
    "regionCode": "RI",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "44009",
    "regionCode": "RI",
    "hasWard": false
  },
  {
    "name": "Abbeville County",
    "code": "45001",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Aiken County",
    "code": "45003",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Allendale County",
    "code": "45005",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Anderson County",
    "code": "45007",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Bamberg County",
    "code": "45009",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Barnwell County",
    "code": "45011",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Beaufort County",
    "code": "45013",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Berkeley County",
    "code": "45015",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "45017",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Charleston County",
    "code": "45019",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "45021",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Chester County",
    "code": "45023",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Chesterfield County",
    "code": "45025",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Clarendon County",
    "code": "45027",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Colleton County",
    "code": "45029",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Darlington County",
    "code": "45031",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Dillon County",
    "code": "45033",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Dorchester County",
    "code": "45035",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Edgefield County",
    "code": "45037",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Fairfield County",
    "code": "45039",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Florence County",
    "code": "45041",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Georgetown County",
    "code": "45043",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Greenville County",
    "code": "45045",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Greenwood County",
    "code": "45047",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Hampton County",
    "code": "45049",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Horry County",
    "code": "45051",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "45053",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Kershaw County",
    "code": "45055",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Lancaster County",
    "code": "45057",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Laurens County",
    "code": "45059",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "45061",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Lexington County",
    "code": "45063",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "McCormick County",
    "code": "45065",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "45067",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Marlboro County",
    "code": "45069",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Newberry County",
    "code": "45071",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Oconee County",
    "code": "45073",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Orangeburg County",
    "code": "45075",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Pickens County",
    "code": "45077",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "45079",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Saluda County",
    "code": "45081",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Spartanburg County",
    "code": "45083",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Sumter County",
    "code": "45085",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "45087",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Williamsburg County",
    "code": "45089",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "York County",
    "code": "45091",
    "regionCode": "SC",
    "hasWard": false
  },
  {
    "name": "Aurora County",
    "code": "46003",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Beadle County",
    "code": "46005",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Bennett County",
    "code": "46007",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Bon Homme County",
    "code": "46009",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Brookings County",
    "code": "46011",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "46013",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Brule County",
    "code": "46015",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Buffalo County",
    "code": "46017",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Butte County",
    "code": "46019",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Campbell County",
    "code": "46021",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Charles Mix County",
    "code": "46023",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "46025",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "46027",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Codington County",
    "code": "46029",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Corson County",
    "code": "46031",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Custer County",
    "code": "46033",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Davison County",
    "code": "46035",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Day County",
    "code": "46037",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Deuel County",
    "code": "46039",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Dewey County",
    "code": "46041",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "46043",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Edmunds County",
    "code": "46045",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Fall River County",
    "code": "46047",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Faulk County",
    "code": "46049",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "46051",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Gregory County",
    "code": "46053",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Haakon County",
    "code": "46055",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hamlin County",
    "code": "46057",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hand County",
    "code": "46059",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hanson County",
    "code": "46061",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Harding County",
    "code": "46063",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hughes County",
    "code": "46065",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hutchinson County",
    "code": "46067",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Hyde County",
    "code": "46069",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "46071",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Jerauld County",
    "code": "46073",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "46075",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Kingsbury County",
    "code": "46077",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "46079",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "46081",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "46083",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Lyman County",
    "code": "46085",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "McCook County",
    "code": "46087",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "McPherson County",
    "code": "46089",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "46091",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Meade County",
    "code": "46093",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Mellette County",
    "code": "46095",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Miner County",
    "code": "46097",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Minnehaha County",
    "code": "46099",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Moody County",
    "code": "46101",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Pennington County",
    "code": "46103",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Perkins County",
    "code": "46105",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Potter County",
    "code": "46107",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Roberts County",
    "code": "46109",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Sanborn County",
    "code": "46111",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Shannon County",
    "code": "46113",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Spink County",
    "code": "46115",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Stanley County",
    "code": "46117",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Sully County",
    "code": "46119",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Todd County",
    "code": "46121",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Tripp County",
    "code": "46123",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Turner County",
    "code": "46125",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "46127",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Walworth County",
    "code": "46129",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Yankton County",
    "code": "46135",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Ziebach County",
    "code": "46137",
    "regionCode": "SD",
    "hasWard": false
  },
  {
    "name": "Anderson County",
    "code": "47001",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Bedford County",
    "code": "47003",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "47005",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Bledsoe County",
    "code": "47007",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Blount County",
    "code": "47009",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Bradley County",
    "code": "47011",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Campbell County",
    "code": "47013",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Cannon County",
    "code": "47015",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "47017",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Carter County",
    "code": "47019",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Cheatham County",
    "code": "47021",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Chester County",
    "code": "47023",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Claiborne County",
    "code": "47025",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "47027",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Cocke County",
    "code": "47029",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Coffee County",
    "code": "47031",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Crockett County",
    "code": "47033",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "47035",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Davidson County",
    "code": "47037",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Decatur County",
    "code": "47039",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "DeKalb County",
    "code": "47041",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Dickson County",
    "code": "47043",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Dyer County",
    "code": "47045",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "47047",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Fentress County",
    "code": "47049",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "47051",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Gibson County",
    "code": "47053",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Giles County",
    "code": "47055",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Grainger County",
    "code": "47057",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "47059",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Grundy County",
    "code": "47061",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hamblen County",
    "code": "47063",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "47065",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "47067",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hardeman County",
    "code": "47069",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "47071",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hawkins County",
    "code": "47073",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Haywood County",
    "code": "47075",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Henderson County",
    "code": "47077",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "47079",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Hickman County",
    "code": "47081",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Houston County",
    "code": "47083",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Humphreys County",
    "code": "47085",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "47087",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "47089",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "47091",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "47093",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Lake County",
    "code": "47095",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Lauderdale County",
    "code": "47097",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Lawrence County",
    "code": "47099",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "47101",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "47103",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Loudon County",
    "code": "47105",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "McMinn County",
    "code": "47107",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "McNairy County",
    "code": "47109",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Macon County",
    "code": "47111",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "47113",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "47115",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "47117",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Maury County",
    "code": "47119",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Meigs County",
    "code": "47121",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "47123",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "47125",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Moore County",
    "code": "47127",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "47129",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Obion County",
    "code": "47131",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Overton County",
    "code": "47133",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Perry County",
    "code": "47135",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Pickett County",
    "code": "47137",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "47139",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "47141",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Rhea County",
    "code": "47143",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Roane County",
    "code": "47145",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Robertson County",
    "code": "47147",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Rutherford County",
    "code": "47149",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "47151",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Sequatchie County",
    "code": "47153",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Sevier County",
    "code": "47155",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "47157",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Smith County",
    "code": "47159",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Stewart County",
    "code": "47161",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Sullivan County",
    "code": "47163",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Sumner County",
    "code": "47165",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Tipton County",
    "code": "47167",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Trousdale County",
    "code": "47169",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Unicoi County",
    "code": "47171",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Union County",
    "code": "47173",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Van Buren County",
    "code": "47175",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "47177",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "47179",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "47181",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Weakley County",
    "code": "47183",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "White County",
    "code": "47185",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Williamson County",
    "code": "47187",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Wilson County",
    "code": "47189",
    "regionCode": "TN",
    "hasWard": false
  },
  {
    "name": "Anderson County",
    "code": "48001",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Andrews County",
    "code": "48003",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Angelina County",
    "code": "48005",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Aransas County",
    "code": "48007",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Archer County",
    "code": "48009",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Armstrong County",
    "code": "48011",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Atascosa County",
    "code": "48013",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Austin County",
    "code": "48015",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bailey County",
    "code": "48017",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bandera County",
    "code": "48019",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bastrop County",
    "code": "48021",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Baylor County",
    "code": "48023",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bee County",
    "code": "48025",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bell County",
    "code": "48027",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bexar County",
    "code": "48029",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Blanco County",
    "code": "48031",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Borden County",
    "code": "48033",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bosque County",
    "code": "48035",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Bowie County",
    "code": "48037",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Brazoria County",
    "code": "48039",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Brazos County",
    "code": "48041",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Brewster County",
    "code": "48043",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Briscoe County",
    "code": "48045",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Brooks County",
    "code": "48047",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "48049",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Burleson County",
    "code": "48051",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Burnet County",
    "code": "48053",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Caldwell County",
    "code": "48055",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "48057",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Callahan County",
    "code": "48059",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cameron County",
    "code": "48061",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Camp County",
    "code": "48063",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Carson County",
    "code": "48065",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cass County",
    "code": "48067",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Castro County",
    "code": "48069",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Chambers County",
    "code": "48071",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cherokee County",
    "code": "48073",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Childress County",
    "code": "48075",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "48077",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cochran County",
    "code": "48079",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Coke County",
    "code": "48081",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Coleman County",
    "code": "48083",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Collin County",
    "code": "48085",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Collingsworth County",
    "code": "48087",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Colorado County",
    "code": "48089",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Comal County",
    "code": "48091",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Comanche County",
    "code": "48093",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Concho County",
    "code": "48095",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cooke County",
    "code": "48097",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Coryell County",
    "code": "48099",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Cottle County",
    "code": "48101",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Crane County",
    "code": "48103",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Crockett County",
    "code": "48105",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Crosby County",
    "code": "48107",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Culberson County",
    "code": "48109",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Dallam County",
    "code": "48111",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Dallas County",
    "code": "48113",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Dawson County",
    "code": "48115",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Deaf Smith County",
    "code": "48117",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Delta County",
    "code": "48119",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Denton County",
    "code": "48121",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "DeWitt County",
    "code": "48123",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Dickens County",
    "code": "48125",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Dimmit County",
    "code": "48127",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Donley County",
    "code": "48129",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Duval County",
    "code": "48131",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Eastland County",
    "code": "48133",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Ector County",
    "code": "48135",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Edwards County",
    "code": "48137",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Ellis County",
    "code": "48139",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "El Paso County",
    "code": "48141",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Erath County",
    "code": "48143",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Falls County",
    "code": "48145",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Fannin County",
    "code": "48147",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "48149",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Fisher County",
    "code": "48151",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "48153",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Foard County",
    "code": "48155",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Fort Bend County",
    "code": "48157",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "48159",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Freestone County",
    "code": "48161",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Frio County",
    "code": "48163",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Gaines County",
    "code": "48165",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Galveston County",
    "code": "48167",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Garza County",
    "code": "48169",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Gillespie County",
    "code": "48171",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Glasscock County",
    "code": "48173",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Goliad County",
    "code": "48175",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Gonzales County",
    "code": "48177",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Gray County",
    "code": "48179",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Grayson County",
    "code": "48181",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Gregg County",
    "code": "48183",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Grimes County",
    "code": "48185",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Guadalupe County",
    "code": "48187",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hale County",
    "code": "48189",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hall County",
    "code": "48191",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hamilton County",
    "code": "48193",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hansford County",
    "code": "48195",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hardeman County",
    "code": "48197",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hardin County",
    "code": "48199",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Harris County",
    "code": "48201",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "48203",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hartley County",
    "code": "48205",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Haskell County",
    "code": "48207",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hays County",
    "code": "48209",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hemphill County",
    "code": "48211",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Henderson County",
    "code": "48213",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hidalgo County",
    "code": "48215",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hill County",
    "code": "48217",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hockley County",
    "code": "48219",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hood County",
    "code": "48221",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hopkins County",
    "code": "48223",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Houston County",
    "code": "48225",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Howard County",
    "code": "48227",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hudspeth County",
    "code": "48229",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hunt County",
    "code": "48231",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Hutchinson County",
    "code": "48233",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Irion County",
    "code": "48235",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jack County",
    "code": "48237",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "48239",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jasper County",
    "code": "48241",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jeff Davis County",
    "code": "48243",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "48245",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jim Hogg County",
    "code": "48247",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jim Wells County",
    "code": "48249",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "48251",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Jones County",
    "code": "48253",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Karnes County",
    "code": "48255",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kaufman County",
    "code": "48257",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kendall County",
    "code": "48259",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kenedy County",
    "code": "48261",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kent County",
    "code": "48263",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kerr County",
    "code": "48265",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kimble County",
    "code": "48267",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "King County",
    "code": "48269",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kinney County",
    "code": "48271",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Kleberg County",
    "code": "48273",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Knox County",
    "code": "48275",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lamar County",
    "code": "48277",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lamb County",
    "code": "48279",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lampasas County",
    "code": "48281",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "La Salle County",
    "code": "48283",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lavaca County",
    "code": "48285",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "48287",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Leon County",
    "code": "48289",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Liberty County",
    "code": "48291",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Limestone County",
    "code": "48293",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lipscomb County",
    "code": "48295",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Live Oak County",
    "code": "48297",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Llano County",
    "code": "48299",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Loving County",
    "code": "48301",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lubbock County",
    "code": "48303",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Lynn County",
    "code": "48305",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "McCulloch County",
    "code": "48307",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "McLennan County",
    "code": "48309",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "McMullen County",
    "code": "48311",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "48313",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "48315",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Martin County",
    "code": "48317",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "48319",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Matagorda County",
    "code": "48321",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Maverick County",
    "code": "48323",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Medina County",
    "code": "48325",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Menard County",
    "code": "48327",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Midland County",
    "code": "48329",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Milam County",
    "code": "48331",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Mills County",
    "code": "48333",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Mitchell County",
    "code": "48335",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Montague County",
    "code": "48337",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "48339",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Moore County",
    "code": "48341",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Morris County",
    "code": "48343",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Motley County",
    "code": "48345",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Nacogdoches County",
    "code": "48347",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Navarro County",
    "code": "48349",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Newton County",
    "code": "48351",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Nolan County",
    "code": "48353",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Nueces County",
    "code": "48355",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Ochiltree County",
    "code": "48357",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Oldham County",
    "code": "48359",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "48361",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Palo Pinto County",
    "code": "48363",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Panola County",
    "code": "48365",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Parker County",
    "code": "48367",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Parmer County",
    "code": "48369",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Pecos County",
    "code": "48371",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "48373",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Potter County",
    "code": "48375",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Presidio County",
    "code": "48377",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Rains County",
    "code": "48379",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Randall County",
    "code": "48381",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Reagan County",
    "code": "48383",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Real County",
    "code": "48385",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Red River County",
    "code": "48387",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Reeves County",
    "code": "48389",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Refugio County",
    "code": "48391",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Roberts County",
    "code": "48393",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Robertson County",
    "code": "48395",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Rockwall County",
    "code": "48397",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Runnels County",
    "code": "48399",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Rusk County",
    "code": "48401",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Sabine County",
    "code": "48403",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "San Augustine County",
    "code": "48405",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "San Jacinto County",
    "code": "48407",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "San Patricio County",
    "code": "48409",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "San Saba County",
    "code": "48411",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Schleicher County",
    "code": "48413",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Scurry County",
    "code": "48415",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Shackelford County",
    "code": "48417",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Shelby County",
    "code": "48419",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Sherman County",
    "code": "48421",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Smith County",
    "code": "48423",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Somervell County",
    "code": "48425",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Starr County",
    "code": "48427",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Stephens County",
    "code": "48429",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Sterling County",
    "code": "48431",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Stonewall County",
    "code": "48433",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Sutton County",
    "code": "48435",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Swisher County",
    "code": "48437",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Tarrant County",
    "code": "48439",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "48441",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Terrell County",
    "code": "48443",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Terry County",
    "code": "48445",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Throckmorton County",
    "code": "48447",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Titus County",
    "code": "48449",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Tom Green County",
    "code": "48451",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Travis County",
    "code": "48453",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Trinity County",
    "code": "48455",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Tyler County",
    "code": "48457",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Upshur County",
    "code": "48459",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Upton County",
    "code": "48461",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Uvalde County",
    "code": "48463",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Val Verde County",
    "code": "48465",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Van Zandt County",
    "code": "48467",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Victoria County",
    "code": "48469",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Walker County",
    "code": "48471",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Waller County",
    "code": "48473",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Ward County",
    "code": "48475",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "48477",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Webb County",
    "code": "48479",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wharton County",
    "code": "48481",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wheeler County",
    "code": "48483",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wichita County",
    "code": "48485",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wilbarger County",
    "code": "48487",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Willacy County",
    "code": "48489",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Williamson County",
    "code": "48491",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wilson County",
    "code": "48493",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Winkler County",
    "code": "48495",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wise County",
    "code": "48497",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Wood County",
    "code": "48499",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Yoakum County",
    "code": "48501",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Young County",
    "code": "48503",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Zapata County",
    "code": "48505",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Zavala County",
    "code": "48507",
    "regionCode": "TX",
    "hasWard": false
  },
  {
    "name": "Beaver County",
    "code": "49001",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Box Elder County",
    "code": "49003",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Cache County",
    "code": "49005",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Carbon County",
    "code": "49007",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Daggett County",
    "code": "49009",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Davis County",
    "code": "49011",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Duchesne County",
    "code": "49013",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Emery County",
    "code": "49015",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "49017",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Grand County",
    "code": "49019",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Iron County",
    "code": "49021",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Juab County",
    "code": "49023",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Kane County",
    "code": "49025",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Millard County",
    "code": "49027",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "49029",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Piute County",
    "code": "49031",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Rich County",
    "code": "49033",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Salt Lake County",
    "code": "49035",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "San Juan County",
    "code": "49037",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Sanpete County",
    "code": "49039",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Sevier County",
    "code": "49041",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Summit County",
    "code": "49043",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Tooele County",
    "code": "49045",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Uintah County",
    "code": "49047",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Utah County",
    "code": "49049",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Wasatch County",
    "code": "49051",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "49053",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "49055",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Weber County",
    "code": "49057",
    "regionCode": "UT",
    "hasWard": false
  },
  {
    "name": "Addison County",
    "code": "50001",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Bennington County",
    "code": "50003",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Caledonia County",
    "code": "50005",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Chittenden County",
    "code": "50007",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Essex County",
    "code": "50009",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "50011",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Grand Isle County",
    "code": "50013",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Lamoille County",
    "code": "50015",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "50017",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Orleans County",
    "code": "50019",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Rutland County",
    "code": "50021",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "50023",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Windham County",
    "code": "50025",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Windsor County",
    "code": "50027",
    "regionCode": "VT",
    "hasWard": false
  },
  {
    "name": "Accomack County",
    "code": "51001",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Albemarle County",
    "code": "51003",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Alleghany County",
    "code": "51005",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Amelia County",
    "code": "51007",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Amherst County",
    "code": "51009",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Appomattox County",
    "code": "51011",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Arlington County",
    "code": "51013",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Augusta County",
    "code": "51015",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Bath County",
    "code": "51017",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Bedford County",
    "code": "51019",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Bland County",
    "code": "51021",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Botetourt County",
    "code": "51023",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Brunswick County",
    "code": "51025",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Buchanan County",
    "code": "51027",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Buckingham County",
    "code": "51029",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Campbell County",
    "code": "51031",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Caroline County",
    "code": "51033",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Carroll County",
    "code": "51035",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Charles City County",
    "code": "51036",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Charlotte County",
    "code": "51037",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Chesterfield County",
    "code": "51041",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Clarke County",
    "code": "51043",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Craig County",
    "code": "51045",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Culpeper County",
    "code": "51047",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Cumberland County",
    "code": "51049",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Dickenson County",
    "code": "51051",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Dinwiddie County",
    "code": "51053",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Essex County",
    "code": "51057",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Fairfax County",
    "code": "51059",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Fauquier County",
    "code": "51061",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Floyd County",
    "code": "51063",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Fluvanna County",
    "code": "51065",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "51067",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Frederick County",
    "code": "51069",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Giles County",
    "code": "51071",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Gloucester County",
    "code": "51073",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Goochland County",
    "code": "51075",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Grayson County",
    "code": "51077",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Greene County",
    "code": "51079",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Greensville County",
    "code": "51081",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Halifax County",
    "code": "51083",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Hanover County",
    "code": "51085",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Henrico County",
    "code": "51087",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Henry County",
    "code": "51089",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Highland County",
    "code": "51091",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Isle of Wight County",
    "code": "51093",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "James City County",
    "code": "51095",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "King and Queen County",
    "code": "51097",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "King George County",
    "code": "51099",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "King William County",
    "code": "51101",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Lancaster County",
    "code": "51103",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Lee County",
    "code": "51105",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Loudoun County",
    "code": "51107",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Louisa County",
    "code": "51109",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Lunenburg County",
    "code": "51111",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Madison County",
    "code": "51113",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Mathews County",
    "code": "51115",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Mecklenburg County",
    "code": "51117",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Middlesex County",
    "code": "51119",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Montgomery County",
    "code": "51121",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Nelson County",
    "code": "51125",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "New Kent County",
    "code": "51127",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Northampton County",
    "code": "51131",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Northumberland County",
    "code": "51133",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Nottoway County",
    "code": "51135",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Orange County",
    "code": "51137",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Page County",
    "code": "51139",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Patrick County",
    "code": "51141",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Pittsylvania County",
    "code": "51143",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Powhatan County",
    "code": "51145",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Prince Edward County",
    "code": "51147",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Prince George County",
    "code": "51149",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Prince William County",
    "code": "51153",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Pulaski County",
    "code": "51155",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Rappahannock County",
    "code": "51157",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Richmond County",
    "code": "51159",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Roanoke County",
    "code": "51161",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Rockbridge County",
    "code": "51163",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Rockingham County",
    "code": "51165",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Russell County",
    "code": "51167",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Scott County",
    "code": "51169",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Shenandoah County",
    "code": "51171",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Smyth County",
    "code": "51173",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Southampton County",
    "code": "51175",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Spotsylvania County",
    "code": "51177",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Stafford County",
    "code": "51179",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Surry County",
    "code": "51181",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Sussex County",
    "code": "51183",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Tazewell County",
    "code": "51185",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Warren County",
    "code": "51187",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "51191",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Westmoreland County",
    "code": "51193",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Wise County",
    "code": "51195",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Wythe County",
    "code": "51197",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "York County",
    "code": "51199",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Alexandria city",
    "code": "51510",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Bedford city",
    "code": "51515",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Bristol city",
    "code": "51520",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Buena Vista city",
    "code": "51530",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Charlottesville city",
    "code": "51540",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Chesapeake city",
    "code": "51550",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Colonial Heights city",
    "code": "51570",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Covington city",
    "code": "51580",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Danville city",
    "code": "51590",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Emporia city",
    "code": "51595",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Fairfax city",
    "code": "51600",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Falls Church city",
    "code": "51610",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Franklin city",
    "code": "51620",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Fredericksburg city",
    "code": "51630",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Galax city",
    "code": "51640",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Hampton city",
    "code": "51650",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Harrisonburg city",
    "code": "51660",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Hopewell city",
    "code": "51670",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Lexington city",
    "code": "51678",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Lynchburg city",
    "code": "51680",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Manassas city",
    "code": "51683",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Manassas Park city",
    "code": "51685",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Martinsville city",
    "code": "51690",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Newport News city",
    "code": "51700",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Norfolk city",
    "code": "51710",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Norton city",
    "code": "51720",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Petersburg city",
    "code": "51730",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Poquoson city",
    "code": "51735",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Portsmouth city",
    "code": "51740",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Radford city",
    "code": "51750",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Richmond city",
    "code": "51760",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Roanoke city",
    "code": "51770",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Salem city",
    "code": "51775",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Staunton city",
    "code": "51790",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Suffolk city",
    "code": "51800",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Virginia Beach city",
    "code": "51810",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Waynesboro city",
    "code": "51820",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Williamsburg city",
    "code": "51830",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Winchester city",
    "code": "51840",
    "regionCode": "VA",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "53001",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Asotin County",
    "code": "53003",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Benton County",
    "code": "53005",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Chelan County",
    "code": "53007",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Clallam County",
    "code": "53009",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "53011",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "53013",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Cowlitz County",
    "code": "53015",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "53017",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Ferry County",
    "code": "53019",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Franklin County",
    "code": "53021",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Garfield County",
    "code": "53023",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "53025",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Grays Harbor County",
    "code": "53027",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Island County",
    "code": "53029",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "53031",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "King County",
    "code": "53033",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Kitsap County",
    "code": "53035",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Kittitas County",
    "code": "53037",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Klickitat County",
    "code": "53039",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "53041",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "53043",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "53045",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Okanogan County",
    "code": "53047",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Pacific County",
    "code": "53049",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Pend Oreille County",
    "code": "53051",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Pierce County",
    "code": "53053",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "San Juan County",
    "code": "53055",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Skagit County",
    "code": "53057",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Skamania County",
    "code": "53059",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Snohomish County",
    "code": "53061",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Spokane County",
    "code": "53063",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Stevens County",
    "code": "53065",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Thurston County",
    "code": "53067",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Wahkiakum County",
    "code": "53069",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Walla Walla County",
    "code": "53071",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Whatcom County",
    "code": "53073",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Whitman County",
    "code": "53075",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Yakima County",
    "code": "53077",
    "regionCode": "WA",
    "hasWard": false
  },
  {
    "name": "Barbour County",
    "code": "54001",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Berkeley County",
    "code": "54003",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Boone County",
    "code": "54005",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Braxton County",
    "code": "54007",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Brooke County",
    "code": "54009",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Cabell County",
    "code": "54011",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Calhoun County",
    "code": "54013",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Clay County",
    "code": "54015",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Doddridge County",
    "code": "54017",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Fayette County",
    "code": "54019",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Gilmer County",
    "code": "54021",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "54023",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Greenbrier County",
    "code": "54025",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Hampshire County",
    "code": "54027",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Hancock County",
    "code": "54029",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Hardy County",
    "code": "54031",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Harrison County",
    "code": "54033",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "54035",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "54037",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Kanawha County",
    "code": "54039",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Lewis County",
    "code": "54041",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "54043",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Logan County",
    "code": "54045",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "McDowell County",
    "code": "54047",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Marion County",
    "code": "54049",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Marshall County",
    "code": "54051",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Mason County",
    "code": "54053",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Mercer County",
    "code": "54055",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Mineral County",
    "code": "54057",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Mingo County",
    "code": "54059",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Monongalia County",
    "code": "54061",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "54063",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Morgan County",
    "code": "54065",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Nicholas County",
    "code": "54067",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Ohio County",
    "code": "54069",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Pendleton County",
    "code": "54071",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Pleasants County",
    "code": "54073",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Pocahontas County",
    "code": "54075",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Preston County",
    "code": "54077",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Putnam County",
    "code": "54079",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Raleigh County",
    "code": "54081",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Randolph County",
    "code": "54083",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Ritchie County",
    "code": "54085",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Roane County",
    "code": "54087",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Summers County",
    "code": "54089",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "54091",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Tucker County",
    "code": "54093",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Tyler County",
    "code": "54095",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Upshur County",
    "code": "54097",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Wayne County",
    "code": "54099",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Webster County",
    "code": "54101",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Wetzel County",
    "code": "54103",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Wirt County",
    "code": "54105",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Wood County",
    "code": "54107",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Wyoming County",
    "code": "54109",
    "regionCode": "WV",
    "hasWard": false
  },
  {
    "name": "Adams County",
    "code": "55001",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Ashland County",
    "code": "55003",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Barron County",
    "code": "55005",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Bayfield County",
    "code": "55007",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Brown County",
    "code": "55009",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Buffalo County",
    "code": "55011",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Burnett County",
    "code": "55013",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Calumet County",
    "code": "55015",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Chippewa County",
    "code": "55017",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Clark County",
    "code": "55019",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Columbia County",
    "code": "55021",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Crawford County",
    "code": "55023",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Dane County",
    "code": "55025",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Dodge County",
    "code": "55027",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Door County",
    "code": "55029",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Douglas County",
    "code": "55031",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Dunn County",
    "code": "55033",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Eau Claire County",
    "code": "55035",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Florence County",
    "code": "55037",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Fond du Lac County",
    "code": "55039",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Forest County",
    "code": "55041",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Grant County",
    "code": "55043",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Green County",
    "code": "55045",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Green Lake County",
    "code": "55047",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Iowa County",
    "code": "55049",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Iron County",
    "code": "55051",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Jackson County",
    "code": "55053",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Jefferson County",
    "code": "55055",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Juneau County",
    "code": "55057",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Kenosha County",
    "code": "55059",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Kewaunee County",
    "code": "55061",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "La Crosse County",
    "code": "55063",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Lafayette County",
    "code": "55065",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Langlade County",
    "code": "55067",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "55069",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Manitowoc County",
    "code": "55071",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Marathon County",
    "code": "55073",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Marinette County",
    "code": "55075",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Marquette County",
    "code": "55077",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Menominee County",
    "code": "55078",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Milwaukee County",
    "code": "55079",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Monroe County",
    "code": "55081",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Oconto County",
    "code": "55083",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Oneida County",
    "code": "55085",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Outagamie County",
    "code": "55087",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Ozaukee County",
    "code": "55089",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Pepin County",
    "code": "55091",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Pierce County",
    "code": "55093",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Polk County",
    "code": "55095",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Portage County",
    "code": "55097",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Price County",
    "code": "55099",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Racine County",
    "code": "55101",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Richland County",
    "code": "55103",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Rock County",
    "code": "55105",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Rusk County",
    "code": "55107",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "St. Croix County",
    "code": "55109",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Sauk County",
    "code": "55111",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Sawyer County",
    "code": "55113",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Shawano County",
    "code": "55115",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Sheboygan County",
    "code": "55117",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Taylor County",
    "code": "55119",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Trempealeau County",
    "code": "55121",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Vernon County",
    "code": "55123",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Vilas County",
    "code": "55125",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Walworth County",
    "code": "55127",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Washburn County",
    "code": "55129",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Washington County",
    "code": "55131",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Waukesha County",
    "code": "55133",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Waupaca County",
    "code": "55135",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Waushara County",
    "code": "55137",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Winnebago County",
    "code": "55139",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Wood County",
    "code": "55141",
    "regionCode": "WI",
    "hasWard": false
  },
  {
    "name": "Albany County",
    "code": "56001",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Big Horn County",
    "code": "56003",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Campbell County",
    "code": "56005",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Carbon County",
    "code": "56007",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Converse County",
    "code": "56009",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Crook County",
    "code": "56011",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Fremont County",
    "code": "56013",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Goshen County",
    "code": "56015",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Hot Springs County",
    "code": "56017",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Johnson County",
    "code": "56019",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Laramie County",
    "code": "56021",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Lincoln County",
    "code": "56023",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Natrona County",
    "code": "56025",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Niobrara County",
    "code": "56027",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Park County",
    "code": "56029",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Platte County",
    "code": "56031",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Sheridan County",
    "code": "56033",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Sublette County",
    "code": "56035",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Sweetwater County",
    "code": "56037",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Teton County",
    "code": "56039",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Uinta County",
    "code": "56041",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Washakie County",
    "code": "56043",
    "regionCode": "WY",
    "hasWard": false
  },
  {
    "name": "Weston County",
    "code": "56045",
    "regionCode": "WY",
    "hasWard": false
  }
]