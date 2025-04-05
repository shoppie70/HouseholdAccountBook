<?php

namespace App\UseCases\Household;

class GetSuccessMessagesAction
{
    // ランダムで褒めるメッセージを生成（子供を褒めるような表現）
    protected array $messages = [
        '家計簿を入力できるなんて、すごいね！',
        'やったね！ちゃんと入力できて、えらいぞ！',
        '頑張ったね！入力しっかりできて偉い！',
        'しっかり管理できてるね、最高だよ！',
        '家計簿入力、バッチリ！すごいぞー！',
        'きちんとできて、とってもえらいね！',
        'やるじゃん！家計簿入力完璧だね！',
        '家計簿完成、おめでとう！努力が出てるね！',
        'コツコツできて、とっても立派だね！',
        'えらい！入力できた時点で100点だよ！',
        'まだまだ追加できるどん！！',
    ];

    public function __invoke()
    {
        return $this->messages[array_rand($this->messages)];
    }
}
