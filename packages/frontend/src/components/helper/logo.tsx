type LogoProps = {
  main: boolean;
};
function Logo({ main }: LogoProps) {
  return (
    <div className={`flex${main ? '' : ' items-center justify-center'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 152 20"
        className="mr-2 h-40 w-40"
      >
        <defs>
          <path
            id="a"
            d="M10.743 51.67c-14.31-8.14-14.265-41.82-.222-49.728 14.044-7.908 43.176 9.91 43.176 25.054 0 15.143-28.644 32.815-42.954 24.674z"
          ></path>
          <linearGradient id="b" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="#FFA246"></stop>
            <stop offset="100%" stop-color="#E14A53"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="c" fill="#fff">
            <use href="#a"></use>
          </mask>
          <use fill="#FA994D" fill-rule="nonzero" href="#a"></use>
          <path
            fill="url(#b)"
            fill-rule="nonzero"
            d="M10.743 52.566c-14.31-8.141-14.265-41.82-.222-49.728 14.044-7.909 43.176 9.91 43.176 25.053 0 15.144-28.644 32.815-42.954 24.675z"
            mask="url(#c)"
          ></path>
          <path
            fill="#DB466C"
            fill-rule="nonzero"
            d="M.002 26.173c.1 10.31 3.667 20.577 10.741 24.602 14.168 8.06 42.39-9.185 42.946-24.225.005.149.008.297.008.446 0 15.143-28.644 32.815-42.954 24.674C3.463 47.53-.1 36.778.003 26.173z"
          ></path>
          <path
            fill="#FFF"
            d="M10.092 20.98c3.278 0 5.427 2.633 5.427 5.792 0 .187-.011.362-.022.538-.033.318-.23.46-.526.46H6.8c.36 1.798 1.697 2.72 3.368 2.72 1.041 0 1.907-.438 2.379-1.052.175-.187.34-.296.603-.296l1.403-.011c.362 0 .56.219.417.526-.8 1.788-2.599 2.863-4.835 2.863-3.497 0-5.789-2.48-5.789-5.77 0-3.246 2.313-5.77 5.745-5.77zm-3.3 4.838h6.345c-.311-1.868-1.644-2.676-3.056-2.676-1.768 0-2.967 1.035-3.29 2.676zm21.08-4.552c.317 0 .493.175.493.494v9.981c0 .318-.176.494-.494.494H26.49c-.318 0-.493-.176-.493-.494v-1.08c-.83 1.151-2.12 1.859-3.848 1.859-2.982 0-5.449-2.512-5.449-5.77 0-3.257 2.467-5.77 5.449-5.77 1.728 0 3.018.709 3.848 1.86v-1.08c0-.319.175-.494.493-.494h1.381zm-5.34 8.994c1.974 0 3.465-1.47 3.465-3.51s-1.491-3.51-3.465-3.51c-1.973 0-3.464 1.47-3.464 3.51s1.49 3.51 3.464 3.51zm10.39-5.912c0 2.205 6.085.614 6.085 4.804 0 2.161-1.886 3.368-4.309 3.368-2.247 0-4.034-1.075-4.275-3.16-.033-.34.164-.515.482-.515h1.36c.295 0 .416.165.526.44.186.789.953 1.107 1.907 1.107 1.151 0 1.94-.406 1.94-1.24 0-2.182-6.084-.625-6.084-4.804 0-2.139 1.886-3.367 4.144-3.367 2.05 0 3.815 1.075 4.057 3.159.033.34-.165.515-.483.515h-1.36c-.295 0-.416-.164-.525-.45-.176-.778-.91-1.096-1.689-1.096-.986 0-1.776.406-1.776 1.24zm14.359-2.676c.088-.274.285-.406.56-.406h1.501c.35 0 .526.208.406.56l-4.945 14.401c-.087.275-.296.395-.57.395h-1.502c-.35 0-.526-.208-.405-.56l1.36-3.959-4.046-10.267c-.132-.34.022-.57.383-.57h1.491c.274 0 .46.12.56.384l2.795 7.173 2.412-7.151z"
          ></path>
          <path
            className="text"
            fill="#363E4E"
            d="M67.426 21.266c.318 0 .493.175.493.493v9.982c0 3.51-2.762 5.166-5.569 5.166-2.598 0-5.054-1.415-5.372-3.773-.022-.34.176-.516.494-.516h1.392c.296 0 .438.154.526.439.263.866 1.294 1.7 2.96 1.7 2.061 0 3.245-1.119 3.245-3.016v-1.345c-.828 1.17-2.133 1.904-3.892 1.904-2.982 0-5.449-2.512-5.449-5.66s2.467-5.66 5.45-5.66c1.758 0 3.063.734 3.891 1.905V21.76c0-.319.176-.494.494-.494h1.337zm-5.317 8.818c1.995 0 3.486-1.47 3.486-3.444s-1.49-3.444-3.486-3.444c-1.995 0-3.486 1.47-3.486 3.444 0 1.975 1.49 3.444 3.486 3.444zm13.47-9.103c3.279 0 5.427 2.632 5.427 5.791 0 .187-.01.362-.021.538-.033.318-.23.46-.527.46h-8.17c.36 1.798 1.697 2.72 3.368 2.72 1.042 0 1.908-.438 2.38-1.052.175-.187.34-.296.602-.296l1.404-.011c.362 0 .559.219.416.526-.8 1.788-2.598 2.863-4.834 2.863-3.498 0-5.789-2.48-5.789-5.77 0-3.246 2.313-5.77 5.745-5.77zm-3.3 4.837h6.345c-.31-1.868-1.644-2.676-3.055-2.676-1.768 0-2.968 1.035-3.29 2.676zm15.993-4.837c2.04 0 3.618 1.557 3.618 4.19v6.57c0 .318-.176.494-.493.494h-1.382c-.318 0-.493-.176-.493-.494v-6.428c0-1.415-.855-2.117-2.006-2.117-1.24 0-2.357.735-2.357 2.743v5.802c0 .318-.176.494-.494.494h-1.381c-.318 0-.494-.176-.494-.494V21.76c0-.319.176-.494.494-.494h1.381c.318 0 .494.175.494.494v.748c.702-1.068 1.773-1.527 3.113-1.527zm11.004 0c3.278 0 5.427 2.632 5.427 5.791 0 .187-.011.362-.022.538-.033.318-.23.46-.526.46h-8.17c.36 1.798 1.697 2.72 3.368 2.72 1.041 0 1.907-.438 2.379-1.052.175-.187.34-.296.603-.296l1.403-.011c.362 0 .56.219.417.526-.8 1.788-2.599 2.863-4.835 2.863-3.497 0-5.789-2.48-5.789-5.77 0-3.246 2.314-5.77 5.745-5.77zm-3.3 4.837h6.345c-.31-1.868-1.644-2.676-3.056-2.676-1.768 0-2.967 1.035-3.29 2.676zm15.532-4.717c.329-.043.504.154.504.472v1.558c0 .307-.132.482-.362.482-1.436.033-2.795.823-2.795 2.984v5.144c0 .318-.176.494-.494.494h-1.381c-.318 0-.493-.176-.493-.494V21.76c0-.319.175-.494.493-.494h1.381c.318 0 .494.175.494.494v1.15c.58-1.159 1.538-1.689 2.653-1.809zm12.605.659v9.981c0 .318-.176.494-.494.494h-1.381c-.318 0-.493-.176-.493-.494v-1.08c-.83 1.151-2.12 1.859-3.848 1.859-2.982 0-5.449-2.512-5.449-5.77 0-3.257 2.467-5.77 5.449-5.77 1.728 0 3.018.709 3.848 1.86v-1.08c0-.319.175-.494.493-.494h1.381c.318 0 .494.175.494.494zm-5.833 8.5c1.974 0 3.465-1.47 3.465-3.51s-1.491-3.51-3.465-3.51c-1.973 0-3.464 1.47-3.464 3.51s1.49 3.51 3.464 3.51zm13.285-8.994c.317 0 .493.175.493.494v1.294c0 .318-.176.493-.493.493h-1.524v8.194c0 .318-.176.494-.494.494h-1.381c-.318 0-.493-.176-.493-.494v-8.194h-1.535c-.318 0-.494-.175-.494-.493V21.76c0-.319.176-.494.494-.494h1.535V18.25c0-.319.175-.494.493-.494h1.381c.318 0 .494.175.494.494v3.016h1.524zm6.881 11.254c-3.212 0-5.788-2.512-5.788-5.77 0-3.257 2.576-5.77 5.788-5.77 3.213 0 5.789 2.513 5.789 5.77 0 3.258-2.576 5.77-5.789 5.77zm0-2.304c1.93 0 3.42-1.47 3.42-3.466 0-1.996-1.49-3.466-3.42-3.466s-3.42 1.47-3.42 3.466c0 1.997 1.49 3.466 3.42 3.466zm12.715-9.115c.328-.043.504.154.504.472v1.558c0 .307-.132.482-.362.482-1.436.033-2.796.823-2.796 2.984v5.144c0 .318-.175.494-.493.494h-1.381c-.318 0-.494-.176-.494-.494V21.76c0-.319.176-.494.494-.494h1.381c.318 0 .493.175.493.494v1.15c.58-1.159 1.539-1.689 2.654-1.809z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
export default Logo;
