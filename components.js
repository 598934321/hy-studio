// 有思网 - 导航栏和页脚组件
(function() {
    // 导航菜单数据
    const navData = {
        services: {
            title: '服务',
            items: [
                { name: '品牌策略', href: '#brand-strategy' },
                { name: '视觉设计', href: '#visual-design' },
                { name: '数字营销', href: '#digital-marketing' },
                { name: '内容创作', href: '#content-creation' }
            ]
        },
        ip: {
            title: 'IP',
            items: [
                { name: 'IP形象设计', href: '#ip-design' },
                { name: 'IP授权运营', href: '#ip-licensing' },
                { name: '衍生品开发', href: '#ip-merchandise' }
            ]
        },
        music: {
            title: '音乐',
            items: [
                { name: '商业配乐', href: '#commercial-music' },
                { name: '音乐制作', href: '#music-production' },
                { name: '音效设计', href: '#sound-design' }
            ]
        },
        video: {
            title: '视频',
            items: [
                { name: '企业宣传片', href: '#corporate-video' },
                { name: '产品广告', href: '#product-ad' },
                { name: '短视频制作', href: '#short-video' }
            ]
        },
        cases: {
            title: '案例',
            items: [
                { name: '品牌全案', href: '#full-case' },
                { name: '单项服务', href: '#single-service' },
                { name: '行业案例', href: '#industry-case' }
            ]
        },
        support: {
            title: '技术支持',
            items: [
                { name: '网站开发', href: '#web-dev' },
                { name: '小程序开发', href: '#mini-program' },
                { name: '系统定制', href: '#system-custom' }
            ]
        }
    };

    // 快速链接
    const quickLinks = [
        '品牌策略', 'LOGO设计', '商业配乐', '企业宣传片', '网站开发'
    ];

    // 当前激活的面板
    let activePanel = null;
    let isTransitioning = false;

    // 生成菜单项HTML
    function generateMenuItems() {
        return Object.entries(navData).map(([key, data]) => {
            return `<li class="nav-item" data-menu="${key}"><span class="nav-link">${data.title}</span></li>`;
        }).join('');
    }

    // 生成下拉面板HTML
    function generateDropdownPanels() {
        return Object.entries(navData).map(([key, data]) => {
            const itemsHtml = data.items.map(item =>
                `<a href="${item.href}" class="dropdown-item">${item.name}</a>`
            ).join('');
            return `
                <div class="nav-dropdown-panel" data-panel="${key}">
                    <div class="dropdown-content">
                        <div class="dropdown-grid">
                            ${itemsHtml}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 生成导航栏HTML
    function generateNavbar() {
        const quickLinksHtml = quickLinks.map(link =>
            `<a href="#" class="quick-link">${link}</a>`
        ).join('');

        return `
            <div class="nav-wrapper">
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-logo-wrapper">
                            <a href="index.html" class="nav-logo">
                                <img src="images/logo.png" alt="有思网">
                                <span>有思网</span>
                            </a>
                        </div>

                        <ul class="nav-menu">
                            ${generateMenuItems()}
                        </ul>

                        <div class="nav-icons">
                            <div class="search-wrapper">
                                <svg class="nav-icon search-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.35-4.35"/>
                                </svg>
                            </div>
                            <div class="bag-wrapper">
                                <svg class="nav-icon bag-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                    <line x1="3" y1="6" x2="21" y2="6"/>
                                    <path d="M16 10a4 4 0 0 1-8 0"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>

                ${generateDropdownPanels()}

                <!-- 搜索面板 -->
                <div class="search-panel" id="search-panel">
                    <div class="search-content">
                        <div class="search-input-wrapper">
                            <input type="text" class="search-input" placeholder="搜索服务、案例...">
                        </div>
                        <div class="search-quick-links">
                            <h4>快速链接</h4>
                            <div class="quick-link-list">${quickLinksHtml}</div>
                        </div>
                    </div>
                </div>

                <!-- 购物袋面板 -->
                <div class="bag-panel" id="bag-panel">
                    <div class="bag-content">
                        <div class="bag-grid">
                            <div class="bag-column">
                                <div class="bag-column-title">账户</div>
                                <a href="pages/login.html" class="bag-panel-item">登录</a>
                                <a href="#" class="bag-panel-item">注册</a>
                            </div>
                            <div class="bag-column">
                                <div class="bag-column-title">我的</div>
                                <a href="#" class="bag-panel-item">个人资料</a>
                                <a href="#" class="bag-panel-item">我的订单</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 全局遮罩 -->
            <div class="nav-backdrop" id="nav-backdrop"></div>
        `;
    }

    // 生成页脚HTML
    function generateFooter() {
        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-grid">
                        <div class="footer-column">
                            <h4>选购及了解</h4>
                            <ul>
                                <li><a href="#">品牌策略</a></li>
                                <li><a href="#">视觉设计</a></li>
                                <li><a href="#">IP设计</a></li>
                                <li><a href="#">音乐服务</a></li>
                                <li><a href="#">视频制作</a></li>
                                <li><a href="#">技术开发</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>账户</h4>
                            <ul>
                                <li><a href="pages/login.html">登录</a></li>
                                <li><a href="#">个人信息</a></li>
                                <li><a href="#">管理</a></li>
                                <li><a href="#">注销</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>商务案例</h4>
                            <ul>
                                <li><a href="#">单项设计</a></li>
                                <li><a href="#">全案设计</a></li>
                                <li><a href="#">行业案例</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>关于有思网</h4>
                            <ul>
                                <li><a href="#">公司简介</a></li>
                                <li><a href="#">团队介绍</a></li>
                                <li><a href="#">联系我们</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-legal">
                            <a href="#">隐私政策</a>
                            <a href="#">使用条款</a>
                            <a href="#">销售政策</a>
                            <a href="#">法律信息</a>
                            <a href="#">网站地图</a>
                        </div>
                        <div class="footer-copyright">
                            Copyright © 2026 有思网. 保留所有权利。
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    // 注入组件
    function injectComponents() {
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (navbarPlaceholder) {
            navbarPlaceholder.outerHTML = generateNavbar();
        }
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = generateFooter();
        }
    }

    // 关闭所有面板
    function closeAllPanels(callback) {
        const panels = document.querySelectorAll('.nav-dropdown-panel, .search-panel, .bag-panel');
        const backdrop = document.getElementById('nav-backdrop');

        panels.forEach(panel => panel.classList.remove('active'));
        backdrop?.classList.remove('show');
        activePanel = null;

        if (callback) {
            setTimeout(callback, 150);
        }
    }

    // 显示下拉面板
    function showDropdownPanel(menuKey) {
        const panel = document.querySelector(`.nav-dropdown-panel[data-panel="${menuKey}"]`);
        const backdrop = document.getElementById('nav-backdrop');

        if (activePanel === menuKey) return;

        if (activePanel) {
            closeAllPanels(() => {
                panel?.classList.add('active');
                backdrop?.classList.add('show');
                activePanel = menuKey;
            });
        } else {
            panel?.classList.add('active');
            backdrop?.classList.add('show');
            activePanel = menuKey;
        }
    }

    // 初始化交互
    function initInteractions() {
        const navItems = document.querySelectorAll('.nav-item[data-menu]');
        const searchToggle = document.querySelector('.search-toggle');
        const bagToggle = document.querySelector('.bag-toggle');
        const searchPanel = document.getElementById('search-panel');
        const bagPanel = document.getElementById('bag-panel');
        const backdrop = document.getElementById('nav-backdrop');
        const searchInput = document.querySelector('.search-input');
        const navWrapper = document.querySelector('.nav-wrapper');

        // 菜单项悬停
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                showDropdownPanel(item.dataset.menu);
            });
        });

        // 离开导航区域关闭面板
        navWrapper?.addEventListener('mouseleave', () => {
            // 延迟关闭，避免鼠标快速移动时闪烁
            setTimeout(() => {
                if (!document.querySelector('.nav-dropdown-panel.active')?.matches(':hover')) {
                    closeAllPanels();
                }
            }, 100);
        });

        // 搜索面板
        searchToggle?.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = searchPanel?.classList.contains('active');
            closeAllPanels();
            if (!isActive) {
                searchPanel?.classList.add('active');
                backdrop?.classList.add('show');
                searchInput?.focus();
            }
        });

        // 购物袋面板
        bagToggle?.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = bagPanel?.classList.contains('active');
            closeAllPanels();
            if (!isActive) {
                bagPanel?.classList.add('active');
                backdrop?.classList.add('show');
            }
        });

        // 点击遮罩关闭
        backdrop?.addEventListener('click', closeAllPanels);

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeAllPanels();
        });
    }

    // DOM加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectComponents();
            initInteractions();
        });
    } else {
        injectComponents();
        setTimeout(initInteractions, 0);
    }
})();
