// /lib/api.ts
export const fakeSubmit = async (data: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Fake submitted:', data);
        resolve(data);
      }, 1500);
    });
  };
  