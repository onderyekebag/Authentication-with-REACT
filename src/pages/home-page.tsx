import UserLayout from "../layouts/user-layout.tsx";

const topics = [
    {
        title: "Axios Interceptors",
        description: "Interceptors run before every request or response. This project uses a custom Axios instance created with axios.create(). Its request interceptor reads the JWT token directly from localStorage and attaches it to the Authorization header automatically on every outgoing request.",
        badge: "HTTP",
        code: `const api = axios.create({
              baseURL: import.meta.env.VITE_API_URL,
            });
            
            api.interceptors.request.use((config) => {
              const auth = JSON.parse(
                localStorage.getItem('authentication') ?? 'null'
              );
              if (auth?.token?.id_token) {
                config.headers.Authorization = \`Bearer \${auth.token.id_token}\`;
              }
              return config;
            });`,
    },
    {
        title: "LocalStorage Persistence",
        description: "Redux state resets on every page refresh. To keep the user logged in, the JWT and account data are saved to localStorage inside extraReducers when the login or getAccount thunk resolves. On slice initialization, the state is pre-filled from localStorage before the first render.",
        badge: "Storage",
        code: `// Persist after successful login
                extraReducers: (builder) => {
                  builder.addCase(loginService.fulfilled, (state, action) => {
                    state.token = action.payload;
                    state.isAuthenticated = true;
                    localStorage.setItem('authentication', JSON.stringify(state));
                  });
                }
                
                // Rehydrate before first render
                const fromStorage = JSON.parse(
                  localStorage.getItem('authentication') ?? 'null'
                );
                const initialState = fromStorage ?? defaultState;`,
    },
    {
        title: "Redux Toolkit — Slices",
        description: "Slices bundle initial state, reducers, and action creators in one place. The auth slice manages isAuthenticated and the JWT token. The account slice manages user profile data. Both use extraReducers to react to async thunk results.",
        badge: "State",
        code: `const authSlice = createSlice({
                  name: 'auth',
                  initialState,
                  reducers: {
                    login: (state, action) => { ... },
                    logout: (state) => { ... },
                  },
                  extraReducers: (builder) => {
                    builder.addCase(loginService.fulfilled, (state, action) => {
                      state.token = action.payload;
                      state.isAuthenticated = true;
                    });
                  },
                });`,
    },
    {
        title: "createAsyncThunk",
        description: "createAsyncThunk handles async API calls inside Redux. It automatically dispatches pending, fulfilled, and rejected actions based on the promise result. This project uses it for the login and getAccount API calls, keeping async logic out of components.",
        badge: "Async",
        code: `export const loginService = createAsyncThunk(
              'authenticate',
              async (login: LoginInterface) => {
                const response = await api.post<JWTToken>('authenticate', login);
                return response.data;
              }
            );
            
            export const getAccount = createAsyncThunk(
              'account',
              async () => {
                const response = await api.get('account');
                return response.data;
              }
            );`,
    },
];

const badgeColors: Record<string, string> = {
    "HTTP": "bg-blue-100 text-blue-700",
    "Storage": "bg-amber-100 text-amber-700",
    "State": "bg-violet-100 text-violet-700",
    "Async": "bg-green-100 text-green-700",
};

const HomePage = () => {
    return (
        <UserLayout>
            <div className="bg-gray-100 min-h-screen">

                <div className="bg-gray-900 py-16">
                    <div className="container mx-auto px-6 text-center">
                    <span
                        className="inline-block bg-indigo-500/20 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
                        React Authentication
                    </span>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Modern Auth Patterns in React
                        </h1>
                        <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
                            This project demonstrates real-world authentication patterns using React, Redux Toolkit,
                            Axios interceptors, and localStorage persistence.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-14">
                    <h2 className="text-xl font-bold text-gray-800 mb-8">Core Concepts</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {topics.map((topic) => (
                            <div key={topic.title} className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-bold text-gray-900">{topic.title}</h3>
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[topic.badge]}`}>
                                    {topic.badge}
                                </span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{topic.description}</p>
                                <pre
                                    className="bg-gray-950 text-gray-300 text-xs rounded-lg p-4 overflow-x-auto leading-relaxed">
                                <code>{topic.code}</code>
                            </pre>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </UserLayout>
    );
};

export default HomePage;