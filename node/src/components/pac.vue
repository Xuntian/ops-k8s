<template>
  <div class="pac">
    <Header :userinfo='userinfo' @onLogined='reGetUserinfo' @onLogOut='toLogout'></Header>
    <main>
      <div class="row">
        <Banner :userinfo='userinfo' @onLogined='reGetUserinfo'></Banner>
      </div>
      <div class="row intro-row">
        <div class="container">
          <div class="decoration hidden-xs-only">
            <div class="white-bg"></div>
            <div class="transparent-bg"></div>
          </div>
          <div class="content">
            <h1 class="title">
              <img src="@/assets/pac/game_info_title.png" alt="">
            </h1>
            <p class="intro">“国际智能创意大奖赛”（International Intellectual Creation Contest）,简称IICC，是中国首个以自主开发的计算机编程语言NPL为基础，以自主研发的创作软件Paracraft 为工具的科技与文化融合的创新性品牌；是一项由政府、业界、学界共同支持、倾力打造的人工智能产业领域的顶级赛事；是一个以评选原创优秀创意作品和优秀编程作品为载体，旨在激发全民的自主创新意识，培育青少年的基础计算机科学素养，提升青少年的基础计算机思维能力和创新创造能力的国际性权威赛事。IICC 以“创新·合作·开放·协同 ”为原则，倡导“高品质、高品格、高品位”的理念，鼓励自主开发和内容原创，打造精品；宏扬优秀文化，挖掘产业价值；培育人工智能领域顶级技术人才和创意人才，引导和推动人工智能产业的战略升级和科学发展。<br/>IICC每年举办一次，2018国际智能产业大奖赛在深圳市福田区人民政府的大力支持下，由中国教育台和深圳市大富配天集团共同举办。IICC 面向全球的专业创作团队、技术型创业团队和在校学生征集作品，通过国际化、专业性评委团队评审，评选出百余个奖项，并对获奖者进行表彰，真正培养青少年的科学技术·人工智能的工业童子功，为未来产业升级提供人才储备。<br/>2018年的赛事时间为2018年5月-2018年12月，主题设定为“梦想·未来”，赛事口号为“智创未来·乘云而上”。</p>
            <div class="paracraft">
              <img src="@/assets/pac/paracraft_topmenu_logo.png" alt="">
              <div class="paracraft-intro">
                <p>
                  <span class="stress">Paracraft 创意空间</span>是一款面向全年龄用户的免费的3D创作软件。</p>
                <p>你可以用它创建3D场景和人物，制作动画和电影，学习和编写计算机程序。下载软件后，</p>
                <p>可观看百部优秀的用户电影作品，创造属于你的个人作品。</p>
              </div>
              <div class="more">
                <a href="http://www.paracraft.cn/?lang=zh" target="_blank"><img src="@/assets/pac/know.png" alt=""></a>
                <p><a href="http://www.paracraft.cn/?lang=zh" target="_blank">了解更多</a></p>
              </div>
            </div>
            <p class="paracraft-info"><img src="@/assets/pac/little_dot.png" alt="">Paracraft创意空间是官方指定唯一的比赛创作软件。<img class="transform-img cla
            hidden-xs-only" src="@/assets/pac/little_dot.png" alt=""></p>
          </div>
        </div>
      </div>
      <div class="row wards-row">
        <div class="container">
          <h1 class="title">
            <img src="@/assets/pac/award_title.png" alt="">
          </h1>
          <p class="row-info">成功需要强烈的兴趣和顽强的入迷</p>
          <div class="classify clearfix">
            <div class="item-box">
              <img class="trophy-img" src="@/assets/pac/trophy.png" alt="">
              <div class="decoration hidden-xs-only">
                <div class="white-bg"></div>
                <div class="transparent-bg"></div>
              </div>
              <div class="rank-item">
                <h1>
                  <span>公开组
                    <img class="circle-decoration" src="@/assets/pac/circle.png" alt="">
                  </span>
                </h1>
                <p class="item-info">面向全球的动画爱好者<br>和编程爱好者</p>
                <el-collapse v-model="rank1ActiveName" accordion>
                  <el-collapse-item name="1">
                    <template slot='title'>
                      <h3>NPL 大奖
                        <span>(1个，
                          <span>100万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot='title'>
                      <h3>NPL 最佳教程奖
                        <span>(1个，
                          <span>20万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践充分应用NPL相关各功能，以文字、视频、软件的形式设计、编撰相关课程和课件，便于他人学习研究《Paracraft创意空间》和NPL语言及相关功能</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 最佳编程奖
                        <span>(1个，
                          <span>20万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践，使用用NPL语言开发出类似NPL CAD， 电影方块，自主动画系统，3D GIS校园等插件工具。或是基于《Paracraft创意空间》社区，设计可供单人或多人游乐体验之小程序。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 最佳场景设计奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>使用《Paracraft创意空间》的建筑功能，以单人或多人的形式搭建场景。充分发挥《Paracraft创意空间》优势特色，结合自定义材质、自定义模型等功能，创作宏伟壮丽的场景。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 最佳3D角色奖
                        <span>(1个，
                          <span>15万元</span> )</span>
                      </h3>
                    </template>
                    <div>于《创意空间》系列软件的模型设计功能，用FBX（不可包含动画）或彩色方块建模，用电影方块制作动画，每个角色至少包含走 跑 跳 待机4个动作，在电影中通过姓名、身世、皮肤、戏份、动作动画等手法塑造的成功角色，使观众留下极为深刻印象的主人公或配角。</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 最佳开源贡献奖
                        <span>(1个，
                          <span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>用NPL语言开发出多个类似NPL CAD，电影方块，自主动画系统，3D GIS校园，等创作工具作品集。作品数量不少于5个，整个开发过程必须开源</div>
                  </el-collapse-item>
                  <el-collapse-item name="7">
                    <template slot='title'>
                      <h3>NPL 老顽童奖
                        <span>(1个，
                          <span>10万元</span> )</span>
                      </h3>
                    </template>
                    <div>鼓励老年群体积极参赛，表彰年龄在65岁以上且能提交完整作品的参赛者。</div>
                  </el-collapse-item>
                  <el-collapse-item name="8">
                    <template slot='title'>
                      <h3>NPL 小小梦想家
                        <span>(3个，
                          <span>最高可获得4.5万元</span> )</span>
                      </h3>
                    </template>
                    <div>小朋友利用逻辑塔智能积木搭建各种要素造型（动植物、建筑物等），利用骨骼动画技术，控制一个或数个动物，结合故事剧情可以配以文字，融入音乐音效，亲子共同参与并在APP 3D环境中呈现。</div>
                  </el-collapse-item>
                  <el-collapse-item name="9">
                    <template slot='title'>
                      <h3>NPL 人气十佳
                        <span>(10个，
                          <span>1万元</span> )</span>
                      </h3>
                    </template>
                    <div>由网络人气投票产生，获奖作品可重叠获得此奖项。网络投票得分占比60%，合作媒体代表评审团投票得分占比40%。并按最终得分从高到低取前十名获得本次大赛人气奖</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
            <div class="item-box">
              <img class="trophy-img" src="@/assets/pac/trophy.png" alt="">
              <div class="decoration hidden-xs-only">
                <div class="white-bg"></div>
                <div class="transparent-bg"></div>
              </div>
              <div class="rank-item">
                <h1>
                  <span>
                    学生组
                    <img class="circle-decoration" src="@/assets/pac/circle.png" alt="">
                  </span>
                </h1>
                <p class="item-info">面向在校学生</p>
                <el-collapse v-model="rank2ActiveName" accordion>
                  <el-collapse-item name="1">
                    <template slot='title'>
                      <h3>NPL 最佳故事短片奖
                        <span>(1个，
                          <span>10万元</span> )</span>
                      </h3>
                    </template>
                    <div>基于NPL及其原生引擎和代表软件《Paracraft创意空间》，通过研究、实践充分应用NPL相关各功能，以动画作品形式充分展现《Paracraft创意空间》平台性能和价值。结合作品故事情节、场景设计、音乐音效等综合因素确定大奖。</div>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot='title'>
                      <h3>NPL 优秀游戏作品奖
                        <span>(20个，
                          <span>最高
                            <span class="hidden-xs-only">可获得</span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以主题材质包的形式，参照现有方块的类型制作全新风格的方块材质。所有参赛电影、小程序的自定义材质包同步参与本奖项的角逐，也能以材质包的形式独立参赛。</div>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot='title'>
                      <h3>NPL 优秀材质奖
                        <span>(20个，
                          <span>最高
                            <span class="hidden-xs-only">可获得</span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以主题材质包的形式，参照现有方块的类型制作全新风格的方块材质。所有参赛电影、小程序的自定义材质包同步参与本奖项的角逐，也能以材质包的形式独立参赛。</div>
                  </el-collapse-item>
                  <el-collapse-item name="4">
                    <template slot='title'>
                      <h3>NPL 优秀视觉特效奖
                        <span>(20个，
                          <span>最高
                            <span class="hidden-xs-only">可获得</span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>以电影短片的形式，展现精彩卓绝的运镜和剪辑手法，或是勾勒宏伟壮阔的像素世界，带给观众以极具冲击力的视觉体验。</div>
                  </el-collapse-item>
                  <el-collapse-item name="5">
                    <template slot='title'>
                      <h3>NPL 优秀原创音效奖
                        <span>(20个，
                          <span>最高
                            <span class="hidden-xs-only">可获得</span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>本奖项主要针对于在电影短片中专为推动电影情节、哄托场景气氛所作的场景的原创配乐和原创音效。参赛选手也可以从表现自然风光、主场场景的角度入手，组织相关的背景音乐。（即，是否允许用户以制作背景音乐的形式参赛，还是本奖只评判电影中的音乐）</div>
                  </el-collapse-item>
                  <el-collapse-item name="6">
                    <template slot='title'>
                      <h3>NPL 优秀剧本创意奖
                        <span>(20个，
                          <span>最高
                            <span class="hidden-xs-only">可获得</span>5万元</span> )</span>
                      </h3>
                    </template>
                    <div>本奖项旨在鼓励那些具有极佳故事创作才能，受软件制作限制无法完整诠释自己作品的剧本作者。根据电影剧情、立意以及对人物的刻画进行相应的评判。</div>
                  </el-collapse-item>
                  <el-collapse-item name="7">
                    <template slot='title'>
                      <h3>NPL 人气十佳
                        <span>(10个，
                          <span>1万元</span> )</span>
                      </h3>
                    </template>
                    <div>由网络人气投票产生，获奖作品可重叠获得此奖项。网络投票得分占比60%，合作媒体代表评审团投票得分占比40%。并按最终得分从高到低取前十名获得本次大赛人气奖</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row guest-row">
        <div class="container">
          <h1 class="title">
            <img src="@/assets/pac/guest_title.png" alt="">
          </h1>
          <div class="guests">
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
            <div class="guest-item strip-bg">
              <img src="@/assets/pac/guest-1.png" alt="">
              <h3>奇仔</h3>
              <p>中国教育家协会会员</p>
              <p>Paracraft明星玩家</p>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row process-row">
        <h1 class="title">
          <img src="@/assets/pac/process_title.png" alt="">
        </h1>
        <div class="time-shaft clearfix hidden-xs-only">
          <div class="shaft-item first">
            <p class='time'>2018年5月10日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p class="shaft-title">作品征集</p>
          </div>
          <div class="shaft-item second">
            <p class='time'>11月30日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p>截稿</p>
          </div>
          <div class="shaft-item third">
            <p class='time'>12月</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="此环节由网络投票和媒体代表投票产生人气十佳，评分标准：网络*60%+媒体代表*40%。">
              <p slot="reference">
                <span class="strip-bg">网络投票</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item forth">
            <p class='time'>12月10日~17日</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="所有作品按分类分配给相应组别的评委团，每部作品安排3位不同的评委打分，最后取平均分，周期为一个星期。">
              <p slot="reference">
                <span class="strip-bg">初赛</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item fifth">
            <p class='time'>12月底</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <el-popover placement="bottom" width="214" trigger="hover" popper-class='shaft-popper' content="邀请评委专家到深圳，对分类作品进行评审。同一幅作品由该类目的所有评委打分取平均分，按分数从高到低产生排序。">
              <p slot="reference">
                <span class="strip-bg">决赛</span>
              </p>
            </el-popover>
          </div>
          <div class="shaft-item sixth">
            <p class='time'>2019年1月</p>
            <p class="dot-box">
              <span class="dot"></span>
            </p>
            <p>颁奖典礼</p>
          </div>
        </div>
        <div class="time-shaft-xs hidden-sm-and-up">
          <div class="shaft-item first">
            <p>
              <span class="time">2018年5月10日</span>
              /
              <span class="title">作品征集</span>
            </p>
          </div>
          <div class="shaft-item second">
            <p>
              <span class="time">11月30日</span>
              /
              <span class="title">截稿</span>
            </p>
          </div>
          <div class="shaft-item third">
            <p>
              <span class="time">12月</span>
              /
              <span class="title">网络投票</span>
            </p>
            <p class='detail'>此环节由网络投票和媒体代表投票产生人气十佳，评分标准：网络*60%+媒体代表*40%。</p>
          </div>
          <div class="shaft-item forth">
            <p>
              <span class="time">12月10日~17日</span>
              /
              <span class="title">初赛</span>
            </p>
            <p class='detail'>所有作品按分类分配给相应组别的评委团，每部作品安排3位不同的评委打分，最后取平均分，周期为一个星期。</p>
          </div>
          <div class="shaft-item fifth">
            <p>
              <span class="time">12月底</span>
              /
              <span class="title">决赛</span>
            </p>
            <p class='detail'>邀请评委专家到深圳，对分类作品进行评审。同一幅作品由该类目的所有评委打分取平均分，按分数从高到低产生排序。</p>
          </div>
          <div class="shaft-item sixth">
            <p>
              <span class="time">2019年1月</span>
              /
              <span class="title">颁奖典礼</span>
            </p>
          </div>
        </div>
      </div>
      <div class="works-row">
        <div class="container">
          <h1 class="title">
            <img src="@/assets/pac/past_title.png" alt="">
          </h1>
          <div class="works">
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_qq846704851/keepworkdatasource/raw/master/qq846704851_images/img_1509606407416.png" alt="">
              </div>
              <h4>宇宙快递</h4>
              <div class="info">
                <p>作者： HM</p>
                <p>2017年10月13日 16:20</p>
              </div>
            </div>
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_lin77622307/world_base32_42b2p2fqqe/raw/master/preview.jpg?ver=104" alt="">
              </div>
              <h4>惧谁</h4>
              <div class="info">
                <p>作者： colin</p>
                <p>2017年10月12日 10:40</p>
              </div>
            </div>
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_pcljj/world_base32_4wnzvz5gqe/raw/master/preview.jpg?ver=320" alt="">
              </div>
              <h4>囚禁</h4>
              <div class="info">
                <p>作者： 阿杰</p>
                <p>2017年10月30日 09:37</p>
              </div>
            </div>
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_werpc/world_base32_4woinz42qttjlbpexkfte/raw/master/preview.jpg?ver=178" alt="">
              </div>
              <h4>圆的故事2</h4>
              <div class="info">
                <p>作者： 阿杰/无心/奇仔</p>
                <p>2017年10月30日 09:37</p>
              </div>
            </div>
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_keep2017/world_base32_jvqxe4zqg4zdo/raw/master/preview.jpg?ver=2695" alt="">
              </div>
              <h4>火星探险</h4>
              <div class="info">
                <p>作者： 哆/李晴晴</p>
                <p>2017年09月06日 08:48</p>
              </div>
            </div>
            <div class="work-item">
              <div class="cover">
                <img src="http://git.keepwork.com/gitlab_rls_qizai/world_FindYou/raw/master/preview.jpg?ver=660" alt="">
              </div>
              <h4>寻找你</h4>
              <div class="info">
                <p>作者： 奇仔</p>
                <p>2017年10月11日 23:57</p>
              </div>
            </div>
          </div>
          <div class="read-more-box">
            <a class="read-more-btn" href="http://keepwork.com/official/pac2017/index" target="_blank">查看全部</a>
          </div>
        </div>
      </div>
      <div class="orgs-row">
        <div class="container">
          <h1 class="title">
            <img src="@/assets/pac/oganiziation_title.png" alt="">
          </h1>
          <div class="orgs">
            <div class="org-item">
              <h2>支持单位</h2>
              <ul>
                <li>深圳市福田区人民政府</li>
              </ul>
            </div>
            <div class="org-item">
              <h2>主办单位</h2>
              <ul>
                <li>中国教育电视台</li>
                <li>深圳市大富配天集团</li>
              </ul>
            </div>
            <div class="org-item cooperator">
              <h2>合作单位</h2>
              <ul>
                <li>北京拓维研究院</li>
                <li>国际先进动态影像协会</li>
                <li>香港动漫电玩节组委会</li>
                <li>深圳市方块动漫文化发展有限公司</li>
                <!-- <li>前海拉瓦动漫（深圳）有限公司</li> -->
                <li>深圳市时代科腾文化传媒有限公司</li>
                <li>深圳市噢深商贸有限公司</li>
              </ul>
            </div>
            <div class="org-item copyright">
              <h2>版权服务</h2>
              <ul>
                <li>中国版权保护中心粤港澳版权登记大厅</li>
                <li>深圳市凯德版权代理有限公司</li>
              </ul>
            </div>
            <div class="org-item">
              <h2>协办单位</h2>
              <ul>
                <li>凌速博览有限公司</li>
                <li>上海配天智慧云物联网技术有限公司</li>
                <li>深圳市帕拉卡科技有限公司</li>
                <li>深圳市爱致科技有限公司</li>
              </ul>
            </div>
            <div class="org-item">
              <h2>承办单位</h2>
              <ul>
                <li>国际智能创意大奖赛组委会</li>
                <li>深圳市大富科技股份有限公司</li>
                <li>深圳市大富网络科技有限公司</li>
                <li>深圳市一网乾坤科技文化发展有限公司</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row account-row">
        <img src="@/assets/pac/code.png" alt="">
        <h4>关注公众号，了解比赛实时动态</h4>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './common/header'
import Banner from './common/banner'
import Footer from './common/footer'
import 'element-ui/lib/theme-chalk/display.css'
export default {
  name: 'pac',
  components: {
    Header,
    Banner,
    Footer
  },
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem('userinfo')),
      rank1ActiveName: '1',
      rank2ActiveName: '1'
    }
  },
  methods: {
    toApply() {
      if (this.userinfo) {
        this.applyDialogVisible = true
        return
      }
      this.loginDialogVisible = true
    },
    reGetUserinfo() {
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    },
    toLogout() {
      this.userinfo = undefined
      localStorage.removeItem('userinfo')
    }
  }
}
</script>
<style lang="scss">
html,
body {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  /* height: 100%; */
  margin: 0;
  padding: 0;
}

.shaft-popper.el-popper {
  background-color: #101011;
  color: #fff;
  margin-top: 25px;
  box-sizing: border-box;
  border-radius: 0;
  padding: 12px 15px;
  line-height: 24px;
  .popper__arrow {
    top: -7px;
  }
}
.el-dropdown-menu {
  margin-top: 0;
  border: none;
  border-radius: 0;
  padding: 5px 0;
  background-color: #303133;
  a {
    color: #fff;
    text-decoration: none;
  }
  .popper__arrow::after {
    border-bottom-color: #303133;
  }
  .el-dropdown-menu__item {
    padding: 0 27px;
    color: #fff;
  }
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #181619;
    color: #fff;
  }
}
.el-dropdown {
  font-size: 16px;
  cursor: pointer;
}
.pac {
  color: #606266;
  font-size: 16px;
  color: #303133;
  h1 {
    font-size: 30px;
    margin: 0;
  }
  h2 {
    font-size: 20px;
    margin: 0;
  }
  h3 {
    font-size: 18px;
    margin: 0;
    span {
      color: #606266;
      font-size: 13px;
      span {
        color: #e25555;
      }
    }
  }
  h4 {
    font-size: 16px;
    color: #303031;
    margin: 0;
  }
  a {
    color: #606266;
    text-decoration: none;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  .strip-bg {
    position: relative;
  }
  .strip-bg:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 10px;
    background-color: transparent;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 4px,
      #9d9d9d 5px,
      #9d9d9d 6px
    );
  }
  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }
  .title {
    text-align: center;
    position: relative;
    z-index: 2;
    span {
      position: relative;
      z-index: 1;
    }
    span::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 10px;
      background-color: #fee40c;
    }
    img {
      vertical-align: middle;
      margin: 0 15px;
    }
  }
  .tooltip-no-radius {
    border-radius: 0;
  }
  .intro-row {
    background-color: #f5f5f5;
    .content {
      background-color: #fff;
      padding: 0 105px 40px;
      position: relative;
      top: -90px;
    }
    .content::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 20px;
      background-color: transparent;
      background-size: 20px 20px;
      background-image: repeating-linear-gradient(
        -45deg,
        white,
        white 5.6px,
        #d8d8d8 5.6px,
        #d8d8d8 6.1px,
        #3b3b3b 6.1px,
        #3b3b3b 6.6px,
        #d8d8d8 7.1px
      );
    }
    .title {
      padding-bottom: 30px;
    }
    .intro {
      line-height: 37px;
      padding: 50px 0;
      position: relative;
      color: #606266;
      position: relative;
      font-size: 14px;
    }
    .title::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 8px;
      position: absolute;
      left: 0;
      bottom: -8px;
      background-color: #cfcfcf;
    }
    .title::after {
      content: '';
      display: inline-block;
      height: 8px;
      position: absolute;
      left: 20px;
      right: 20px;
      border: 15px solid #fff;
      border-width: 0 15px;
      bottom: -8px;
      background-color: #cfcfcf;
    }
    .paracraft {
      display: flex;
      align-items: center;
      background-color: #dcecff;
      border: 4px dashed #5583ba;
      padding: 10px 30px;
      p {
        line-height: 28px;
        font-size: 14px;
        color: #282828;
      }
    }
    .paracraft-intro {
      flex: 1;
      padding: 0 24px;
      border-right: 3px solid #e5ecf4;
    }
    .more {
      padding-left: 26px;
    }
    .stress {
      font-weight: bold;
    }
    .paracraft-info {
      text-align: center;
      color: #009fe8;
      font-size: 14px;
      font-weight: bold;
      margin-top: 40px;
      img {
        margin-right: 13px;
        vertical-align: middle;
      }
      .transform-img {
        transform: rotate(180deg);
      }
    }
    .decoration {
      display: flex;
      position: relative;
      top: -90px;
      height: 40px;
      .white-bg {
        background-color: #fff;
        flex: 1;
      }
      .transparent-bg {
        width: 40px;
        background-color: transparent;
        position: relative;
      }
      .transparent-bg::before {
        content: '';
        display: inline-block;
        width: 40px;
        height: 27px;
        background-color: #fff;
        position: absolute;
        left: 15px;
        bottom: 25px;
        box-shadow: 0px 10px 0px 0px #afafaf;
      }
      .transparent-bg::after {
        content: '';
        display: inline-block;
        width: 40px;
        height: 27px;
        background-color: #fff;
        position: absolute;
        left: 55px;
        bottom: -12px;
        box-shadow: 0px 10px 0px 0px #afafaf;
      }
    }
  }
  .wards-row {
    background-color: #e9e8e9;
    background-image: linear-gradient(
        rgba(211, 211, 211, 0.3) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(211, 211, 211, 0.3) 1px, transparent 0);
    background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
    padding: 60px 0 70px;
    .row-info {
      text-align: center;
      margin: 25px 0 55px;
      color: #606266;
    }
    .classify {
      padding: 0 60px;
    }
    .item-box {
      float: left;
      width: 460px;
      position: relative;
      margin-top: 60px;
    }
    .item-box:last-child {
      float: right;
    }
    .rank-item {
      height: 650px;
      overflow-y: auto;
      background-color: #fff;
      padding: 2px 28px 20px;
      box-sizing: border-box;
      box-shadow: 0px 8px 0 0px rgba(208, 206, 206, 0.4);
      h1 {
        span {
          position: relative;
          z-index: 0;
        }
      }
    }
    .circle-decoration {
      position: absolute;
      right: -12px;
      top: -2px;
      z-index: -1;
    }
    .trophy-img {
      position: absolute;
      right: 60px;
      top: -56px;
      z-index: 1;
    }
    .item-info {
      font-size: 17px;
      color: #6b6e74;
      padding: 24px 0 22px;
      line-height: 27px;
      height: 50px;
      position: relative;
    }
    .item-info::before {
      content: '';
      left: 0;
      right: 0;
      bottom: -8px;
      height: 8px;
      background-color: #e6e6e8;
      position: absolute;
    }
    .item-info::after {
      content: '';
      left: 17px;
      right: 17px;
      bottom: -8px;
      height: 8px;
      background-color: #e6e6e8;
      position: absolute;
      border: 19px solid #fff;
      border-width: 0 19px;
    }
    .el-collapse {
      border: none;
      padding-left: 30px;
      padding-top: 20px;
    }
    .el-collapse-item__header {
      border: none;
      height: 40px;
      line-height: 40px;
      position: relative;
    }
    .el-collapse-item__header::before {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      left: -25px;
      top: 16px;
      background-color: #019fe8;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .el-collapse-item__content {
      color: #606266;
      padding-bottom: 20px;
    }
    .el-collapse-item__wrap {
      border: none;
    }
    .decoration {
      display: flex;
      position: relative;
      height: 28px;
      .white-bg {
        background-color: #fff;
        flex: 1;
      }
      .transparent-bg {
        width: 40px;
        background-color: transparent;
        position: relative;
      }
      .transparent-bg::before {
        content: '';
        display: inline-block;
        width: 36px;
        height: 27px;
        background-color: #fff;
        position: absolute;
        left: 13px;
        bottom: 16px;
        box-shadow: 0px 8px 0px 0px #afafaf;
      }
    }
  }
  .process-row {
    background-color: #101011;
    position: relative;
    padding: 80px 0 190px;
    color: #fff;
    .transform-img {
      transform: rotate(180deg);
    }
    .time {
      font-weight: lighter;
    }
    .time-shaft {
      width: 940px;
      margin: 100px auto 0;
      display: flex;
      position: relative;
    }
    .time-shaft::after {
      content: '';
      height: 3px;
      left: 62px;
      display: inline-block;
      right: 72px;
      background-image: linear-gradient(90deg, #b10cfe, #2e0cfe);
      position: absolute;
      top: 53px;
    }
    .shaft-item {
      width: 140px;
      text-align: center;
      font-size: 18px;
      .strip-bg {
        padding-bottom: 10px;
        cursor: pointer;
      }
      .strip-bg::after {
        height: 6px;
      }
    }
    .shaft-item:first-child {
      flex: 1;
      text-align: left;
      .dot-box {
        padding-left: 50px;
      }
      .shaft-title {
        padding-left: 20px;
      }
    }
    .dot-box {
      padding: 16px 0 28px;
    }
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .first .dot {
      background-color: transparent;
      width: 7px;
      height: 7px;
      border: 4px solid #b10cfe;
      position: relative;
      top: 3px;
    }
    .second .dot {
      background-color: #870dfe;
    }
    .third .dot {
      background-color: #710bfe;
    }
    .forth .dot {
      background-color: #5c0dfe;
    }
    .fifth .dot {
      background-color: #460dfe;
    }
    .sixth .dot {
      background-color: transparent;
      width: 7px;
      height: 7px;
      border: 4px solid #2f0bfe;
      position: relative;
      top: 3px;
    }
  }
  .process-row::after {
    content: '';
    display: inline-block;
    height: 140px;
    background-image: url('../assets/pac/iicc_bg.png');
    background-repeat: no-repeat;
    position: absolute;
    left: 10%;
    right: 0;
    bottom: 20px;
    opacity: 0.05;
  }
  .guest-row {
    background-color: #f5f5f5;
    .container {
      border: 1px solid #efefef;
      border-width: 0 1px;
      padding: 66px 0 90px;
      position: relative;
    }
    .container::before {
      content: '';
      position: absolute;
      left: 25%;
      right: 25%;
      top: 0;
      bottom: 0;
      border: 2px solid #ededed;
      border-width: 0 2px;
      z-index: 1;
    }
    .container::after {
      content: '';
      width: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      background-color: #ededed;
    }
    h3 {
      margin: 20px 0 30px;
    }
    .guests {
      display: flex;
      justify-content: space-around;
      margin-top: 84px;
      position: relative;
      z-index: 2;
    }
    .guests::before {
      content: '';
      width: 100%;
      height: 175px;
      background-image: url('../assets/pac/add.png');
      position: absolute;
      z-index: -1;
      top: -42px;
      background-size: 25px;
    }
    .guest-item {
      float: left;
      width: 200px;
      background-color: #fff;
      padding: 19px 14px 27px;
      box-sizing: border-box;
      text-align: center;
    }
    p {
      font-size: 14px;
      color: #606266;
    }
  }
  .partner-row {
    text-align: center;
    h4 {
      padding: 12px 0 58px;
    }
    .partners {
      display: flex;
      justify-content: space-around;
      padding: 88px 85px;
      align-items: stretch;
    }
    .partner-item {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .partner-item::after {
      content: '';
      width: 2px;
      height: 18px;
      background-color: #b2b2b2;
      position: absolute;
      right: 0;
      top: 20px;
    }
  }
  .works-row {
    background-color: #f5f5f5;
    .container {
      border: 2px solid #ededed;
      border-width: 0 2px;
      position: relative;
      padding: 75px 0 50px;
    }
    .container::before {
      content: '';
      position: absolute;
      left: 25%;
      right: 25%;
      top: 0;
      bottom: 0;
      border: 2px solid #ededed;
      border-width: 0 2px;
      z-index: 1;
    }
    .container::after {
      content: '';
      width: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      background-color: #ededed;
    }
    .cover {
      width: 280px;
      height: 157px;
      overflow: hidden;
      padding: 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .works {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 45px;
    }
    .work-item {
      width: 300px;
      margin: 20px;
      background-color: #fff;
      box-shadow: 0 5px 0 0 #dfdfdf;
      z-index: 2;
    }
    h4 {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      border-bottom: 2px solid #f5f5f5;
    }
    .info {
      font-size: 12px;
      color: #909399;
      padding: 9px 10px;
      position: relative;
      p:first-child {
        padding-bottom: 5px;
      }
    }
    .read-more-box {
      text-align: center;
      padding: 45px 0 56px;
      position: relative;
      z-index: 2;
    }
    .read-more-box::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20px;
      background-color: transparent;
      background-size: 20px 20px;
      background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 5.6px,
        #d8d8d8 5.6px,
        #d8d8d8 6.1px,
        #3b3b3b 6.1px,
        #3b3b3b 6.6px,
        #d8d8d8 7.1px
      );
    }
    .read-more-btn {
      display: inline-block;
      text-align: center;
      width: 162px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      background-color: #253994;
      color: #fff;
    }
  }
  .orgs-row {
    padding: 75px 0 25px;
    h2 {
      position: relative;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    h2::before {
      content: '';
      position: absolute;
      left: 17px;
      right: 17px;
      bottom: 0;
      height: 4px;
      background-color: #8194d2;
      z-index: 1;
      border: 5px solid #f4f4f4;
      border-width: 0 5px;
    }
    h2::after {
      content: '';
      position: absolute;
      left: 8px;
      right: 8px;
      height: 4px;
      bottom: 0;
      background-color: #8194d2;
    }
    .orgs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 66px;
    }
    .org-item {
      width: 250px;
      min-height: 244px;
      background-color: #f5f5f5;
      box-shadow: 0 10px 0 0 #b1b1b1;
      flex-shrink: 0;
      margin: 0 10px 37px;
      text-align: center;
      padding: 32px 33px 7px;
      box-sizing: border-box;
      font-size: 14px;
      color: #606266;
    }
    ul {
      min-height: 139px;
    }
    li {
      padding-bottom: 11px;
    }
    .cooperator {
      padding: 32px 14px 7px;
      h2::before {
        left: 44px;
        right: 44px;
      }
      h2::after {
        left: 35px;
        right: 35px;
      }
    }
  }
  .account-row {
    text-align: center;
    background-color: #f5f5f5;
    padding: 88px 0 70px;
    background-image: url('../assets/pac/bottom_dotline.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    img {
      padding-bottom: 20px;
    }
  }
}
</style>
<style lang="scss">
@media (max-width: 768px) {
  .el-popper.xs-dropdown-menu {
    margin-top: 0;
    .popper__arrow::after {
      border-bottom-color: #303133;
    }
  }
  .pac {
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 16px;
    }
    .title {
      img {
        width: 110px;
      }
    }
    .intro-row {
      padding: 15px;
      .content {
        padding: 15px;
        top: -40px;
      }
      .intro {
        line-height: 30px;
        font-size: 14px;
        margin-top: 15px;
        padding: 20px 0;
        white-space: pre-wrap;
        max-height: 200px;
        overflow-y: auto;
      }
      .paracraft {
        flex-direction: column;
        padding: 10px 15px;
        margin: 20px 0 28px;
      }
      .paracraft-intro {
        padding: 0;
        border: none;
      }
      .more {
        align-self: center;
        font-weight: bold;
        img {
          width: 28px;
          margin-right: 5px;
        }
        p {
          float: right;
        }
      }
      .paracraft-info {
        font-size: 12px;
        margin-top: 20px;
        img {
          margin-right: 5px;
          width: 10px;
          vertical-align: sub;
        }
      }
      .paracraft-intro {
        border: 1px dashed #fff;
        border-width: 2px 0;
        margin: 15px 0;
        padding: 10px 0;
      }
    }
    .wards-row {
      padding: 35px 15px 15px;
      .el-collapse-item__arrow {
        display: inline-block;
        position: absolute;
        left: -20px;
        top: 14px;
      }
      .el-collapse-item__header::before {
        display: none;
      }
      .el-collapse {
        padding-left: 20px;
      }
      .classify {
        padding: 0;
      }
      .rank-item {
        padding: 20px 15px;
        height: auto;
      }
      .item-box {
        max-width: 100%;
        margin-top: 20px;
      }
      .item-info {
        font-size: 14px;
        padding: 15px 0;
        line-height: 20px;
        height: auto;
      }
      .row-info {
        font-size: 12px;
        margin: 15px 0 0;
      }
      .trophy-img {
        width: 70px;
        right: 15px;
        top: 8px;
      }
    }
    .process-row {
      padding: 20px 0;
      .time-shaft-xs {
        padding: 20px 15px 0 35px;
        position: relative;
      }
      .time-shaft-xs::after {
        content: '';
        width: 2px;
        left: 18px;
        top: 30px;
        bottom: 30px;
        position: absolute;
        // background-color: #fff;
        background-image: linear-gradient(180deg, #b10cfe, #2e0cfe);
      }
      .shaft-item {
        width: 100%;
        text-align: left;
        font-size: 14px;
        padding-bottom: 20px;
        position: relative;
      }
      .shaft-item::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: -20px;
        top: 6px;
        z-index: 1;
      }
      .first::before {
        background-color: #b117fc;
      }
      .second::before {
        background-color: #a417fc;
      }
      .third::before {
        background-color: #9717fc;
      }
      .forth::before {
        background-color: #7b17fc;
      }
      .fifth::before {
        background-color: #5717fc;
      }
      .sixth::before {
        background-color: #3417fc;
      }
      .detail {
        margin-top: 5px;
        line-height: 22px;
        opacity: 0.5;
      }
    }
    .process-row::after {
      display: none;
    }
    .works-row {
      .container {
        border: none;
        padding: 30px 0 20px;
      }
      .works {
        margin-top: 20px;
      }
      .work-item {
        width: 160px;
        margin: 10px;
      }
      .cover {
        width: 140px;
        height: 70px;
      }
    }
    .orgs-row {
      padding: 30px 0 0;
      .orgs {
        margin-top: 20px;
      }
      .org-item {
        min-height: auto;
        width: 170px;
        padding: 7px 5px;
        margin: 0 3px 20px;
        font-size: 12px;
      }
      ul {
        min-height: auto;
      }
      .cooperator h2::before {
        left: 17px;
        right: 17px;
      }
      .cooperator h2::after {
        left: 8px;
        right: 8px;
      }
    }
    .guest-row {
      padding: 15px 0 20px;
      .container {
        border: none;
      }
      .guests {
        flex-wrap: wrap;
        margin: 20px 0 0;
      }
      .guests::before {
        display: none;
      }
      .guest-item {
        margin: 10px 0;
      }
    }
  }
}
</style>