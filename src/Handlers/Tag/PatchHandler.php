<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2017, iBenchu.org
 * @datetime 2017-05-06 15:38
 */
namespace Notadd\Member\Handlers\Tag;

use Notadd\Foundation\Passport\Abstracts\SetHandler;
use Notadd\Member\Models\MemberTag;

/**
 * Class PatchHandler.
 */
class PatchHandler extends SetHandler
{
    /**
     * Execute Handler.
     *
     * @return bool
     * @throws \Exception
     */
    public function execute()
    {
        $this->validate($this->request, [
            'tags' => 'required|array',
            'type' => 'required|in:combine,delete',
        ], [
            'tags.required' => '标签列表并不存在！',
            'tags.array'    => '标签列表必须是数组！',
            'type.required' => '操作类型不存在',
            'type.in'       => '操作类型不合法',
        ]);
        collect($this->request->input('tags'))->each(function ($id) {
            if (MemberTag::query()->where('id', $id)->count()) {
                switch ($this->request->input('type')) {
                    case 'combine':
                        break;
                    case 'delete':
                        MemberTag::query()->find($id)->delete();
                        break;
                }
            }
        });
        $this->messages->push($this->translator->trans('批量更新标签数据成功！'));

        return true;
    }
}