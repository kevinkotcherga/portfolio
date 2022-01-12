module ApplicationHelper
  def default_meta_tags
    {
      site: 'kevinkotcherga.fr',
      title: 'Kevin Kotcherga',
      reverse: true,
      separator: '|',
      description: 'Kevin Kotcherga - Développeur Web - Ruby On Rails - Full stack',
      keywords: 'développeur, ruby on rails, ruby, fullstack, paris',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('apple-touch-icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'kevinkotcherga.fr',
        title: 'Kevin Kotcherga',
        description: 'Kevin Kotcherga - Développeur Web - Ruby On Rails - Full stack',
        type: 'website',
        url: request.original_url,
        image: image_url('login-page.png')
      }
    }
  end
end
