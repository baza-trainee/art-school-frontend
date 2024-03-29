import { create } from 'zustand';
import axios from '@/utils/axios';
import { isDataValid } from '@/utils/formDataValidation';

const usePostersStore = create((set, get) => ({
  loading: false,
  error: '',
  posters: [],
  poster: {},

  getAllPostersPage: async ( page, size) => {
    try {
      const response = await axios.get(`/posters?page=${page}&size=${size}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getPosters: async () => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });
      const response = await axios.get(`/posters`);
      set(() => {
        return {
          posters: response.data.items,
        };
      });
      set(() => {
        return {
          loading: false,
        };
      });
    } catch (error) {
      set(() => {
        return {
          loading: false,
          error: error.message,
        };
      });
      throw new Error(error);
    }
  },

  getPostersById: async id => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });
      const response = await axios.get(`/posters/${id}`);
      set(() => {
        return {
          poster: response.data,
        };
      });
      set(() => {
        return {
          loading: false,
        };
      });
    } catch (error) {
      set(() => {
        return {
          loading: false,
        };
      });
      throw new Error(error);
    }
  },

  addPoster: async data => {
    if (isDataValid(data)) {
      try {
        set(() => {
          return {
            loading: true,
          };
        });
        const response = await axios.post('/posters', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        set(() => {
          return {
            loading: false,
          };
        });
        return response;
      } catch (error) {
        set(() => {
          return {
            loading: false,
          };
        });
        set(() => {
          if (error.response.data.detail === 'Unauthorized') {
            return {
              error: 'Помилка авторизації',
            };
          }
          return {
            error: 'Не вдалося виконати запит, спробуйте пізніше',
          };
        });
        setTimeout(() => {
          set(() => {
            return {
              error: '',
            };
          });
        }, 3000);
        throw new Error(error);
      }
    }
  },

  updatePoster: async (data, id) => {
    if (isDataValid(data)) {
      try {
        set(() => {
          return {
            loading: true,
          };
        });
        const response = await axios.patch(`/posters/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        set(() => {
          return {
            loading: false,
          };
        });
        return response;
      } catch (error) {
        set(() => {
          return {
            loading: false,
          };
        });
        set(() => {
          if (error.response.data.detail === 'Unauthorized') {
            return {
              error: 'Помилка авторизації',
            };
          }
          return {
            error: 'Не вдалося виконати запит, спробуйте пізніше',
          };
        });
        setTimeout(() => {
          set(() => {
            return {
              error: '',
            };
          });
        }, 3000);
        throw new Error(error);
      }
    }
  },

  deletePostersById: async id => {
    if (id) {
      try {
        set(() => {
          return {
            loading: true,
          };
        });
        const response = await axios.delete(`/posters/${id}`);
        set(() => {
          return {
            posters: get().posters.filter(poster => poster.id !== id),
          };
        });
        set(() => {
          return {
            loading: false,
          };
        });
        return response;
      } catch (error) {
        set(() => {
          return {
            loading: false,
          };
        });
        set(() => {
          if (error.response.data.detail === 'Unauthorized') {
            return {
              error: 'Помилка авторизації',
            };
          }
          return {
            error: 'Не вдалося виконати запит, спробуйте пізніше',
          };
        });
        setTimeout(() => {
          set(() => {
            return {
              error: '',
            };
          });
        }, 3000);
        throw new Error(error);
      }
    }
  },
}));

export default usePostersStore;
