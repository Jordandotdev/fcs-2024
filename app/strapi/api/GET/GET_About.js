import config from "../../config";

export const fetchAboutPageData = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.GET_ABOUT_API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(
    `${config.api}/api/about?populate[Description][populate]=true`,
    reqOptions
  );
  const resData = await response.json();
  return resData.data;
};

export const fetchAboutMissionData = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.GET_ABOUT_API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(
    `${config.api}/api/about?populate[Mission][populate][shortTxt][populate]=true`,
    reqOptions
  );
  const resData = await response.json();
  return resData.data;
};

export const fetchAboutHistoryPageData = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.GET_ABOUT_API_TOKEN}`,
    },
    cache: "no-store",
  };
  const response = await fetch(
    `${config.api}/api/about?populate[History][populate][HistoryRecord][populate]=true`,
    reqOptions
  );
  const resData = await response.json();
  return resData.data;
};

