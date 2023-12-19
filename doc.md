# Hướng dẫn dự án

Dự án sử dụng React kết hợp với TypeScript để làm nên giao diện Admin

```txt
Các thư viện sử dụng:
- react
- react-dom
- react-router-dom
- recharts
- react-query
- material
- sass
- Một số icon
```

## Setup basic
```txt
Tạo folder pages trong src.

Tạo những folder con
- home
  + home.scss
  + Home.tsx
- products
  + products.scss
  + Products.tsx
- users
  + users.scss
  + Users.tsx

Cài đặt scss

Sử dụng các thứ mình đã tạo vào App.tsx
```

## React router dom

```txt
yarn add react-router-dom
```

```txt
sử dụng thư viện React router dom

import thư viện

tạo biến router gán cho nó các path và element

Cái biến router được truyền vào và sử dụng trong <RouterProvider router={router}/>

Khi đổi đường dẫn trên URL sẽ thay đổi trang
```

```jsx
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "users",
      element: (
        <Users />
      ),
    },
    {
      path: "products",
      element: (
        <Products />
      )
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
```


Phân tích thì Menu sẽ luôn xuất hiện và chiếm 1 phần bên trái, và giao diện này sẽ không đổi.

Việc thay đổi sẽ là phần còn lại nên là App.tsx sẽ phải có thay đổi ở phần router

```txt
Thay vì sử dụng Route và Link, mình sẽ sử dụng Outlet
```

```jsx
import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
```

Ở đoạn code trên mình đã thay đổi cách mà router, dùng Outlet và bổ sung trang login, những tái sử dụng Layout (phần menu bên tay trái), là những thằng con (children) Home Users Products. Riêng Login không tái sử dụng nên phần riêng biệt.

