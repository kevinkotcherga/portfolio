module ApplicationHelper
  def default_meta_tags
    {
      site: 'MyMovies.dev',
      title: 'MyMovies',
      reverse: true,
      separator: '|',
      description: 'The most popular movie website in the world',
      keywords: 'action, horror, drama',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('apple-touch-icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'MyMovies.dev',
        title: 'MyMovies',
        description: 'The most popular movie website in the world',
        type: 'website',
        url: request.original_url,
        image: image_url('login-page.png')
      }
    }
  end
end
