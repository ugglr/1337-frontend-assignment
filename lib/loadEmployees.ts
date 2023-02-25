export type Employee = {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string | null;
  github: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
  published: boolean;
};

export const loadEmployees = async (): Promise<Employee[]> => {
  try {
    const res = await fetch(process.env.API_URL as string, {
      headers: {
        Authorization: process.env.API_TOKEN as string,
      },
    });

    const jsonData = await res.json();

    return jsonData as Employee[];
  } catch (err) {
    // log error somewhere
    console.log(err);
    return Promise.reject(err);
  }
};
